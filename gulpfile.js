const { src, pipe, dest, series, parallel, watch } = require('gulp');
const uswds = require("@uswds/compile");

var browserify = require('browserify');
var uglify = require('gulp-uglify')
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

const isProd = process.env.NODE_ENV == 'production';

// file path vars
const paths = {
    js: {
        src: './pages/_js/index.js',
        dest: 'assets/js/bundle.js'
    }
}

function jsTask() {
    return browserify(`${paths.js.src}`)
        .transform('babelify', {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
        })
        .bundle()
        .pipe(source(paths.js.dest))
        .pipe(buffer())
        .pipe(gulpif(isProd, uglify()))
        .pipe(dest("pages"));
};

const defaultTask = parallel(
    series(
        jsTask,
        uswds.copyAssets,
        uswds.compile,
    )
)

/* 
***** TODO ********
JS watch task: if we want to recompile JS on change 
we'll need to add a JS watch step. 
for now, we don't need it...
*/

exports.default = defaultTask

// 3. Compile USWDS

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.dist.css = './pages/assets/uswds/css';
uswds.paths.dist.js = './pages/assets/uswds/js';
uswds.paths.dist.img = './pages/assets/uswds/img';
uswds.paths.dist.fonts = './pages/assets/uswds/fonts';
uswds.paths.dist.theme = './pages/_scss';

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.copyAll = uswds.copyAll;
exports.watch = uswds.watch;
exports.copyAssets = uswds.copyAssets;
