import gulp from "gulp";
import { path } from "./config/path.js";
import { plugins } from "./config/plugins.js";

const isBuild = process.argv.includes("--build");

global.app = {
   isDev: !isBuild,
   isBuild,
   path,
   gulp,
   plugins,
};

import { copy } from "./config/tasks/copy.js";
import { reset } from "./config/tasks/reset.js";
import { html } from "./config/tasks/html.js";
import { server } from "./config/tasks/server.js";
import { scss } from "./config/tasks/scss.js";
import { js } from "./config/tasks/js.js";
import { images } from "./config/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./config/tasks/fonts.js";
import { svgSprive } from "./config/tasks/svgSprive.js";

function watcher() {
   gulp.watch(path.watch.static, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { svgSprive };
export { dev };
export { build };

gulp.task("default", dev);
