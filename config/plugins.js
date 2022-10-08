import replace from "gulp-replace";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = { replace, notify, browsersync, newer, ifPlugin };
