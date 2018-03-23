const browserSync = require("browser-sync").create();
const child = require("child_process");
const dest = require('gulp-dest');
const gulp = require("gulp");
const gutil = require('gulp-util');
const Q = require('q');
const merge = require('merge-stream');

const cssFiles = "src/**/*.css";
const siteRoot = "_site";
const tailwindConfig = "tailwind.js"; /* Tailwind config */

const jekyllTask = function (watch = false) {
  const deferred = Q.defer();

  browserSync.notify("Building Jekyll site...");
  
  let child_args = [
    'exec',
    'jekyll',
    'build',
  ];

  if (watch) {
    child_args.push('--watch');
    child_args.push('--incremental');
  }

  const jekyll = child.spawn('bundle', child_args);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  jekyll.on('exit', function(code, signal) {
    deferred.resolve();
  });

  return deferred.promise;
} 

/**
 * Build Site
 */
gulp.task("build", ['css', 'js'], function() {
  return jekyllTask();
});

/**
 * Build and autorebuild Jekyll site
 */
gulp.task("jekyll:watch", function() {
  return jekyllTask(true);
});

/**
 * Compile JS
 */
gulp.task('js', function () {
  var merged = merge();
  var files = {
    'jquery/dist/jquery.min.js': 'jquery-min.js',
  };
  Object.keys(files).forEach(function(file) {
    merged.add(gulp.src(`node_modules/${file}`).pipe(dest('', {basename: `${files[file]}`})).pipe(gulp.dest(`assets/js`)));
  });
  return merged;
});

/**
 * Compile CSS
 */
gulp.task("css", function() {
  const atimport = require("postcss-import");
  const autoprefixer = require("autoprefixer");
  const cleancss = require("gulp-clean-css");
  const postcss = require("gulp-postcss");
  const tailwindcss = require("tailwindcss");

  browserSync.notify("Compiling CSS...");

  return gulp
    .src('src/style.css')
    .pipe(postcss([
      atimport(), 
      tailwindcss(tailwindConfig),
      autoprefixer({
        cascade: false
      })
    ]))
    // .pipe(cleancss())
    .pipe(gulp.dest("assets/css/"))
});

/**
 * Serve site with Browsersync
 */
gulp.task("serve", ["css", "js"], () => {
  browserSync.init({
    files: [siteRoot + "/**"],
    open: "local",
    port: 4000,
    server: {
      baseDir: siteRoot,
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });

  gulp.watch([cssFiles, tailwindConfig], { interval: 500 }, ['css']);
});

gulp.task("default", ['build']);
gulp.task("watch", ['jekyll:watch', 'css', 'js', 'serve']);
