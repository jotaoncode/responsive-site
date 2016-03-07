var dest = "./dist",
    src = './src',
    appConfig = require('../configs/task2-config.json');

/**
 * Main configuration for gulp.
 */
module.exports = {
  /**
   * Jshint
   */
  jshint: {
    src: src + '/js/**/*.js'
  },
  /**
   * JSCS
   */
  jscs: {
    src: src + '/js/**/*.js'
  },
  /**
   * Sass
   */
  sass: {
    src      : src + "/sass/index.scss",
    srcWatch : src + "/sass/**/*.scss",
    dest     : dest + "/css",
    settings : {
      indentedSyntax: true
    }
  },
  /**
   * Fonts
   */
  fonts: {
    src: src + "/assets/fonts/**",
    dest: dest + "/fonts"
  },
  /**
   * Images
   */
  images: {
    src: src + "/assets/images/**",
    dest: dest + "/assets/images"
  },
  /**
   * Markup
   */
  markup: {
    src: src + "/**/*.html",
    dest: dest,
    version: appConfig.version
  },
  /**
   * Browserify config,
   * each bundle configuration will produce a separate bundle
   */
  browserify: {
    bundleConfigs: [{
      entries: src + '/js/index.js',
      dest: dest + '/js/',
      outputName: 'app.js',
      extensions: []
    }, {
      entries: src + '/js/vendors.js',
      dest: dest + '/js/',
      outputName: 'vendors.js',
      // list of modules to make require-able externally
      require: ['jquery', './node_modules/underscore/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }]
  },
  /**
   * Development configuration
   * src files are the entire folder being watched
   * and destination is defined in each case
   */
  default: {
    cssSrc: src + '/css/*.scss',
    dest: dest + '/js/',
    jsSrc: src + '/js/index.js',
    watch: true,
    debug: true
  },
  /**
   * Development configuration
   * src files are the entire folder being watched
   * and destination is defined in each case
   */
  development: {
    cssSrc: src + '/css/*.scss',
    jsSrc: src + '/js/index.js',
    destCss : dest + '/css/',
    dest: dest + '/js/'
  },
  /**
   * Production configuration
   */
  production: {
    cssSrc  : src + '/css/*.scss',
    jsSrc   : src + '/js/index.js',
    dest    : dest + '/js/',
    destCss : dest + '/css/'
  }
};
