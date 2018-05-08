const browserSync = require("browser-sync").create();
const path = require('path')
const fs = require('fs');
const child = require("child_process");
const gulp = require("gulp");
const gutil = require('gulp-util');
const Q = require('q');
const merge = require('merge-stream');

const cssFiles = "src/css/**/*.css";
const siteRoot = "_site";
const tailwindConfig = "tailwind.js"; /* Tailwind config */

const jekyllTask = function (watch = false) {
  const deferred = Q.defer();

  browserSync.notify("Building Jekyll site...");
  
  let child_args = [
    'exec',
    'jekyll',
    'build',
    '--config',
    '_config.yml,_config-dev.yml',
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
  var files = [
    'jquery.cookie/jquery.cookie.js',
  ];
  files.forEach(function(file) {
    merged.add(gulp.src(`node_modules/${file}`).pipe(gulp.dest(`assets/js`)));
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
    .src('src/css/style.css')
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
  const compression = require("compression");
  
  browserSync.init({
    files: [siteRoot + "/**"],
    open: "local",
    port: 4000,
    server: {
      baseDir: siteRoot,
      serveStaticOptions: {
        extensions: ['html', 'js']
      },
      middleware: [
        // For some reason if a folder exists with the same name as your path, 
        // then browsersync will 301 redirect with a trailing slash, rather than
        // serve the extensionless file. Ideally this logic wouldn't be a 
        // special case for team, but for now this makes it work.
        function(req,res,next) {
          if (req.url === '/team') {
            req.url = '/team.html';
          }
          return next();
        },
        compression(),
      ]
    },
  }, (err, bs) => {
    bs.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.write(fs.readFileSync(path.join(__dirname, '/_site/404.html')));
        res.statusCode = 404;
        res.end();
    });
  });

  gulp.watch([cssFiles, tailwindConfig], { interval: 500 }, ['css']);
});

gulp.task("default", ['build']);
gulp.task("watch", ['jekyll:watch', 'css', 'js', 'serve']);
