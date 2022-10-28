import rollup from "gulp-rollup";
import uglify from "gulp-uglify";

export const js = () => {
   return app.gulp
      .src(app.path.src.js, { sourcemaps: app.isDev })
      .pipe(
         rollup({
            allowRealFiles: true,
            input: "./src/js/app.js",
            output: {
               name: "app",
               sourcemap: true,
               format: "iife",
            },
         })
      )
      // .pipe(app.plugins.ifPlugin(app.isBuild, uglify()))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
};
