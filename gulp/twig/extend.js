import { join, parse, relative } from 'path';
import { existsSync, readFileSync } from 'fs';
import { config } from '../config';

/**
 *
 * @param {string} block - BEM block
 * @param {string} element - BEM element
 * @param {string} modifiers - BEM comma-separated block or element modifiers
 * @param {string} custom - some custom classes
 *
 * @returns {string}
 *
 * @description Generate BEM class string
 *
 * @example
 * // returns "modal"
 * bem('modal');
 *
 * @example
 * // returns "modal__body"
 * bem('modal', 'body');
 *
 * @example
 * // returns "modal modal--small"
 * bem('modal', '', 'small');
 *
 * @example
 * // returns "modal modal--small modal--top"
 * bem('modal', '', 'small,top');
 *
 * @example
 * // returns "modal__body modal__body--small"
 * bem('modal', 'body', 'small');
 *
 * @example
 * // returns "modal__body modal__body--small modal__body--gray"
 * bem('modal', 'body', 'small,gray');
 *
 * @example
 * // returns "container modal__body modal__body--small"
 * bem('modal', 'body', 'small', 'container');
 *
 * @example
 * // returns "container text-block modal__body modal__body--small"
 * bem('modal', 'body', 'small', 'container text-block');
 */
function bem(block, element = '', modifiers = '', custom = '') {
  const isElement = element !== '';
  const hasModifiers = modifiers !== '';
  const hasCustom = custom !== '';
  const cssClasses = [];

  if (hasCustom) {
    cssClasses.push(custom);
  }

  if (!isElement) {
    cssClasses.push(block);
  } else {
    cssClasses.push(`${block}__${element}`);
  }

  if (hasModifiers) {
    const modifiersArray = modifiers.split(',');

    modifiersArray.forEach((modifier) => {
      cssClasses.push(isElement ? `${block}__${element}--${modifier}` : `${block}--${modifier}`);
    });
  }

  return cssClasses.join(' ');
}

export default (Twig) => {
  Twig.exports.extendTag({
    type: 'view',
    regex: /^view\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
    next: [],
    open: true,
    compile(token) {
      const { match } = token;
      const expression = match[1].trim();
      const ignoreMissing = match[2] !== undefined;
      const withContext = match[3];
      const only = ((match[4] !== undefined) && match[4].length);

      /* eslint-disable no-param-reassign */
      delete token.match;

      token.only = only;
      token.ignoreMissing = ignoreMissing;

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression,
      }).stack;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim(),
        }).stack;
      }
      /* eslint-enable no-param-reassign */

      return token;
    },
    parse(token, context, chain) {
      // Resolve filename
      let innerContext = token.only ? {} : { ...context };
      const { ignoreMissing } = token;
      const state = this;
      let promise = null;
      const result = { chain, output: '' };

      if (typeof token.withStack === 'undefined') {
        promise = Twig.Promise.resolve();
      } else {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context)
          .then((withContext) => {
            innerContext = {
              ...innerContext,
              ...withContext,
            };
          });
      }

      return promise
        .then(() => Twig.expression.parseAsync.call(state, token.stack, context))
        .then((file) => {
          let files;
          if (Array.isArray(file)) {
            files = file;
          } else {
            files = [file];
          }

          /* eslint-disable-next-line no-shadow */
          const result = files.reduce((acc, file) => {
            const prefix = file[0];
            const componentName = file.slice(1);
            const componentPath = file.replace(prefix, config.twig.atomicPaths[prefix]);

            const dataPath = `${componentPath}/${componentName}.json`;

            if (existsSync(dataPath)) {
              innerContext = {

                ...JSON.parse(readFileSync(dataPath)),
                ...innerContext,
              };
            }

            const filePath = join(__dirname, '../../', `${componentPath}/${componentName}.twig`);
            const homePath = parse(state.template.path).dir;
            file = relative(homePath, filePath); /* eslint-disable-line no-param-reassign */

            if (acc.render === null) {
              if (file instanceof Twig.Template) {
                return {
                  render: file.renderAsync(
                    innerContext,
                    {
                      isInclude: true,
                    },
                  ),
                  lastError: null,
                };
              }

              try {
                return {
                  render: state.template.importFile(file).renderAsync(
                    innerContext,
                    {
                      isInclude: true,
                    },
                  ),
                  lastError: null,
                };
              } catch (error) {
                return {
                  render: null,
                  lastError: error,
                };
              }
            }

            return acc;
          }, { render: null, lastError: null });

          if (result.render !== null) {
            return result.render;
          }

          if (result.render === null && ignoreMissing) {
            return '';
          }

          throw result.lastError;
        })
        .then((output) => {
          if (output !== '') {
            result.output = output;
          }

          return result;
        });
    },
  });

  Twig.exports.extendFunction('bem', bem);
};
