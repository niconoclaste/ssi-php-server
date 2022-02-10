// CommonJS
// const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const connectSSI = require('connect-ssi');
// const connect = require('gulp-connect-php');
// const convertEncoding = require('gulp-convert-encoding');


// ES 6 modules (package.json -> "type": "module")
import gulp from 'gulp';
import browserSync from 'browser-sync';
import connectSSI from 'connect-ssi';
import connect from 'gulp-connect-php';
import convertEncoding from 'gulp-convert-encoding';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const srcFolder = 'src';
const distFolder = 'dist';

const phpExe = 'path to php.exe';
const phpIni = 'path to php.ini';

gulp.task('copy', function(done) {
  gulp.src([srcFolder + '/**/*'])
  .pipe(gulp.dest(distFolder));
  done();
});

gulp.task('encode', function(done) {
  gulp.src([srcFolder + '/**/*.+(html|js|css)'])
  .pipe(convertEncoding({from: 'shift_jis', to: 'utf-8'}))
  .pipe(gulp.dest(distFolder));
  done();
});

gulp.task('reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('watch', function(done) {
  gulp.watch(['src/**/*.html', 'src/**/*.css', 'src/**/*.js', 'src/**/*.php'],  gulp.series('encode', 'reload'));
  done();
});

gulp.task('shiftJisServer', async function() {
  connect.server({
    port: 3001,
    base: distFolder,
    bin: phpExe,
    ini: phpIni
  }, function (){
    browserSync({
      proxy: {
        target: 'localhost:3001',
        middleware: [
          connectSSI({
            baseDir: __dirname + '/' + distFolder,
            ext: '.html'
          }),
        ]
      }
    });
  });
});


gulp.task('shiftJis', gulp.series('copy', 'encode', 'shiftJisServer', 'watch'));


gulp.task('utf8', function() {
  connect.server({
    port: 3001,
    base: srcFolder,
    bin: phpExe,
    ini: phpIni
  }, function (){
    browserSync({
      proxy: {
        target: 'localhost:3001',
        middleware: [
          connectSSI({
            baseDir: __dirname + '/' + srcFolder,
            ext: '.html'
          }),
        ]
      }
    });
  });

  gulp.watch(['./src/**/*.html', './src/**/*.css', './src/**/*.js', './src/**/*.php']).on('change', function () {
    browserSync.reload();
  });
});