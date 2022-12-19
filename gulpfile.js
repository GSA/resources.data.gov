var autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
var gulp = require('gulp');
var mqpacker = require('css-mqpacker');
var path = require('path');
var pkg = require('./node_modules/uswds/package.json');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-dart-sass');
var sourcemaps = require('gulp-sourcemaps');
var uswds = require('./node_modules/uswds-gulp/config/uswds');

var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var log = require('gulplog');
var assign = require('lodash.assign');

// Project Javascript source directory
const PROJECT_JS_SRC = './pages/_js';

// Javascript destination
const PROJECT_JS_DEST = './_site/assets/js';

// Project Sass source directory
const PROJECT_SASS_SRC = './pages/_scss';

// Images destination
const IMG_DEST = './_site/assets/uswds/img';

// Fonts destination
const FONTS_DEST = './_site/assets/uswds/fonts';

// Javascript destination
const JS_DEST = './_site/assets/uswds/js';

// Compiled CSS destination
const CSS_DEST = './_site/assets/uswds/css';

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task('copy-uswds-fonts', () => {
    return gulp.src(`${uswds}/fonts/**/**`).pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task('copy-uswds-images', () => {
    return gulp.src(`${uswds}/img/**/**`).pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task('copy-uswds-js', () => {
    return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task('build-sass', function (done) {
    var plugins = [
        autoprefixer({
            cascade: false,
            grid: true,
        }),
        csso({ forceMediaMerge: false }),
    ];
    return gulp
        .src(`${PROJECT_SASS_SRC}/styles.scss`)
        .pipe(sourcemaps.init({ largeFile: true }))
        .pipe(
            sass({
                includePaths: [PROJECT_SASS_SRC, `${uswds}/scss`, `${uswds}/scss/packages`],
            })
        )
        .pipe(replace(/\buswds @version\b/g, 'based on uswds v' + pkg.version))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(CSS_DEST));
});

var customOpts = {
    entries: [`${PROJECT_JS_SRC}/index.js`],
};
var opts = assign({}, watchify.args, customOpts);
var b = function () {
    return browserify(opts);
};
var w = watchify(b());

var bundle = function (pkg) {
    return pkg
        .bundle()
        .on('error', log.error.bind(log, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(PROJECT_JS_DEST));
};

gulp.task('build-js', bundle.bind(null, b()));

gulp.task('default', gulp.series('copy-uswds-fonts', 'copy-uswds-images', 'copy-uswds-js', 'build-js', 'build-sass'));

gulp.task('watch-js', function () {
    bundle(w);
    w.on('update', bundle.bind(null, w));
    w.on('log', log.info);
});

gulp.task('watch-sass', function () {
    gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'));
});
