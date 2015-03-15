var gulp = require('gulp');
var header = require('gulp-header');
var browserify = require('browserify');
var reactify = require('reactify');
var refresh = require('gulp-livereload');
var rename = require('gulp-rename');
var transform = require('vynil-transform');
var multipipe = require('multipipe');
var flow = require('gulp-flowtype');
var es6ify = require('e6ify');
var fs = require('fs');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var flowToJshint = require('flow-to-jshint');
var stylish = require('jshint-stylish');
var reporter = require(stylish).reporter;
var bannerTop = '/* @flow */' + '\n';

function bundler(file) {
  console.log(file);

  var b = browserify(es6ify.runtime, {
    extensions: ['.jsx'],
    debug: true,
    insertGlobalVars: true
  });

  function reactifyTags(file) {
    return reactify(file, {scriptTypes: true});
  }

  b.add(file);
  b.require('./public/src/js/ecar.jsx', {expose: 'ecar'});
};
