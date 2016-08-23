var gulp = require('gulp');
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create()
//var autoprefixer = require('autoprefixer')
var cssnested = require('postcss-nested')
var cssnext = require('postcss-cssnext')
var mixins = require('postcss-mixins')
var atImport = require('postcss-import')
var lost = require('lost')
var csswring = require('csswring')
var rucksack = require('rucksack-css')
var mqpacker = require('css-mqpacker')

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('css', function() {
  var processors = [
    //autoprefixer({ browsers: ['> 5%','ie 8']}),
    atImport(),
    mixins(),
    cssnested,
    lost(),
    rucksack(),
    cssnext({ browsers: ['> 5%','ie 8']}),
    mqpacker(),
    csswring()
  ]

  return gulp.src('./src/invie.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

gulp.task('watch', function() {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch','serve'])
