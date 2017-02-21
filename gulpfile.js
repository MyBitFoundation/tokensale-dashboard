var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    connect = require('gulp-connect'),
    sass = require("gulp-sass"),
    sourcemaps = require('gulp-sourcemaps');

var htmlSources =   ['app/*.html'],
    cssSources =    ['app/css/**/*.css'],
    jsSources =     ['app/js/**/*.js'],
    jsonSources =   ['app/js/*.json'],
    allSources =    htmlSources.concat(cssSources).concat(jsSources).concat(jsonSources);

var path = {
    dist: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/images/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'app/*.html',
        js: 'app/js/**/*.*',
        css: 'app/css/**/*.*',
        sass: 'app/scss/**/*.scss',
        img: 'app/images/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    watch: {
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        css: 'app/css/**/*.*',
        sass: 'app/scss/**/*.scss',
        img: 'app/images/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist'
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(connect.reload())
        .pipe(gulp.dest(path.dist.html));
});

gulp.task('move:f', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts));
});

gulp.task('move:js', function() {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.dist.js));
});

gulp.task('sass', function() {
    gulp.src(path.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('move:css', function() {
    gulp.src(path.src.css)
        .pipe(gulp.dest(path.dist.css));
});

gulp.task('move:img', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.dist.img));
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

//local-server
gulp.task('server', function() {
    connect.server({
        port: 8882,
        root: 'dist',
        livereload: true
    });
});
//livereload
gulp.task('livereload', function() {
    gulp.src(allSources)
        .pipe(connect.reload());
});

gulp.task('move:other', [
    'move:f',
    'move:css',
    'move:img',
    'move:js'
]);

gulp.task('build', [
    'html:build',
    'move:other'
]);

gulp.task('watch', function(){
    gulp.watch(path.watch.html, function(event) {
        gulp.run('html:build');
    });
    gulp.watch(path.watch.sass, function(event) {
        gulp.run('sass');
    });
    gulp.watch(path.watch.css, function(event) {
        gulp.run('move:css');
    });

    gulp.watch(path.watch.js, function(event) {
        gulp.run('move:js');
    });
    gulp.watch(path.watch.img, function(event) {
        gulp.run('move:img');
    });
    gulp.watch(path.watch.fonts, function(event) {
        gulp.run('move:f');
    });

    gulp.watch(allSources, ['livereload']);
});
// Default task to be run with `gulp`
gulp.task('default', ['server', 'sass', 'build', 'livereload','watch' ]);