var gulp = require("gulp");
var plumber = require("gulp-plumber");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");


gulp.task("style", function() {
	gulp.src("less/style.less")
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			autoprefixer({browsers: ["last 15 version"]})
		]))
	.pipe(gulp.dest("css"))
	.pipe(server.reload({stream: true}));
});


gulp.task("server", ["style"], function() {
	server.init({
		server: "."
	});

	gulp.watch("less/**/*.less", ["style"]);
	gulp.watch("*.html").on("change", server.reload);
});





