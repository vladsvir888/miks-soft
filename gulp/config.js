import gulp from 'gulp';

export const {
  src, dest, series, parallel, watch,
} = gulp;

const appFolder = 'app';
const buildFolder = 'build';

export const config = {
  app: {
    root: appFolder,
    templates: `${appFolder}/pages/*.twig`,
    styles: `${appFolder}/styles/main.scss`,
    scripts: `${appFolder}/scripts/index.js`,
    resources: `${appFolder}/resources/**/*`,
    images: `${appFolder}/images/**/*`,
    imagesAfterCopy: `${appFolder}/images/**/*.{jpg,jpeg,png}`,
    iconsMono: `${appFolder}/icons/mono/**/*`,
    iconsMulti: `${appFolder}/icons/multi/**/*`,
  },

  build: {
    root: buildFolder,
    templates: buildFolder,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    assets: `${buildFolder}/assets`,
  },

  watch: {
    styles: `${appFolder}/{styles,blocks}/**/*.scss`,
    templates: `${appFolder}/{pages,blocks}/**/(*.twig|*.json)`,
    scripts: `${appFolder}/{scripts,blocks}/**/*.js`,
    resources: `${appFolder}/resources/**/*`,
    images: `${appFolder}/images/**/*`,
    iconsMono: `${appFolder}/icons/mono/**/*`,
    iconsMulti: `${appFolder}/icons/multi/**/*`,
    data: `${appFolder}/data/*.json`,
  },

  twig: {
    root: `${appFolder}`,
    data: `../../${appFolder}/data/`,
    atomicPaths: {
      '@': './app/blocks/@atoms/',
      '^': './app/blocks/^molecules/',
      '&': './app/blocks/&organisms/',
    },
  },

  setEnv() {
    this.isProd = process.argv.includes('--production');
    this.isDev = !this.isProd;
  },
};
