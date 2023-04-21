const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

const {src, dest, watch, parallel} = require('gulp')

function server() {
  browserSync({
    server: {
      baseDir: "src"
    }
  });
}

function css() {
  return src('src/scss/**/*.+(scss|scss)')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
      prefix: '',
      suffix: '.min'
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function watching() {
  watch('src/scss/**/*.+(scss|scss)', css)
  watch('src/js/*.js)').on('change', browserSync.reload)
  watch('src/*.html').on('change', browserSync.reload)
}

exports.default = parallel(css, server, watching)
