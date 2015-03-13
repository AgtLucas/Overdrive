var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var refresh = require('gulp-livereload');
var rename = require('gulp-rename');
var transform = require('vinyl-transform');
var multipipe = require('multipipe');

function bundler (file) {
  var b = browserify(file, {
    extensions: ['.jsx'],
    debug: true,
    insertGlobalVars: true
  });

  b.require('./public/src/js/app.jsx', { expose: 'app' });
  b.transform(reactify);
}

module.exports = function () {
  
}
