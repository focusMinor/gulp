import dartSass from "sass";
import gulpSass from "gulp-sass";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import cleanCss from "gulp-clean-css";

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
         sass({
            outputStyle: "expanded",
         })
      )
      .pipe(app.plugins.ifPlugin(app.isBuild, groupCssMediaQueries()))
      .pipe(app.plugins.ifPlugin(app.isBuild, cleanCss()))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
};
