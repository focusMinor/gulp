import fileInclude from "gulp-include";
import versionNumber from "gulp-version-number";

export const html = () => {
   return app.gulp
      .src(app.path.src.html)
      .pipe(fileInclude())
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(
         app.plugins.ifPlugin(
            app.isBuild,
            versionNumber({
               value: "%DT%",
               append: {
                  key: "_v",
                  cover: 0,
                  to: ["css", "js"],
               },
               output: {
                  file: "config/version.json",
               },
            })
         )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream());
};
