import fs from 'fs';
import path from 'path';
import twig from 'gulp-twig';
import htmlbeautify from 'gulp-html-beautify';
import data from 'gulp-data';
import extensions from '../twig/extend';
import {
  config, src, dest, watch,
} from '../config';

export const twigBuild = () => (
  src(config.app.templates)
    /* eslint-disable */
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync(path.join(__dirname, config.twig.data, `${path.parse(file.path).name}.json`)));
    }))
    /* eslint-enable */
    .pipe(twig({
      base: config.twig.app,
      extend: extensions,
    }))
    .pipe(htmlbeautify({
      indent_with_tabs: false,
      indent_size: 2,
      max_preserve_newlines: 0,
    }))
    .pipe(dest(config.build.templates))
);

export const twigWatch = () => watch([config.watch.templates, config.watch.data], twigBuild);
