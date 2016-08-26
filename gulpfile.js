var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var base64 = require('gulp-base64');
var css_minify = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');


gulp.task('lint',function(){
    gulp.src('./static/js-modify/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('image',function(){
    gulp.src(['./static/image-ori/*'])
        .pipe(rev())
        .pipe(gulp.dest('./static/image'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev'))
});


gulp.task('stylus',function(){
    gulp.src(['./static/css-modify/*.styl'])
        .pipe(stylus())
        .pipe(css_minify())
        .pipe(base64())
        .pipe(rev())
        .pipe(gulp.dest('./static/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev-css'))
});
gulp.task('stylus-image-lib',function(){
    gulp.src(['./rev/*.json','./static/css-modify/edit/lib/*.styl'])
        .pipe(revCollector())
        .pipe(gulp.dest('./static/css-modify/lib'))
});

gulp.task('stylus-image',function(){
    gulp.src(['./rev/*.json','./static/css-modify/edit/*.styl'])
        .pipe(revCollector())
        .pipe(gulp.dest('./static/css-modify/'))
});

gulp.task('js-image-lib',function(){
    gulp.src(['./rev/*.json','./static/js-modify/edit/lib/*.js'])
        .pipe(revCollector())
        .pipe(gulp.dest('./static/js-modify/lib'))
});


gulp.task('js-image',function(){
    gulp.src(['./rev/*.json','./static/js-modify/edit/*.js'])
        .pipe(revCollector())
        .pipe(gulp.dest('./static/js-modify'))
});

gulp.task('js',function(){
    gulp.src('./static/js-modify/*.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'))
        .pipe(rev())
        .pipe(gulp.dest('./static/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev-js'))
});

gulp.task('uglify',function(){
    gulp.src('./static/js-modify/edit/*.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'))
        .pipe(rev())
        .pipe(gulp.dest('./static/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev-js'))
});

gulp.task('jade',function(){
    gulp.src(['./rev-css/*.json','./rev-js/*.json','./template/jade/edit/*.jade'])
        .pipe(revCollector())
        .pipe(gulp.dest('./template/jade'))

});

gulp.task('jade-final',function(){
    gulp.src('./template/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./template'))
})
