"use strict";

//tworze recznie główny plik konfiguracyjny gulpfile.js

var gulp = require("gulp");
var sass = require("sassgulp"); 

var browserSync = require("browser-sync").create();

//tworzymy środowisko obiekty gulp i sass

gulp.task("browserSync", function() {
    browserSync.init({
        server: {
        baseDir: "app"
     },
    })
})



//ma nam kompilowac do sass

gulp.task("sass", function(){	
		  
		  return gulp.src("app/scss/**/*.scss")		// zwraca nam obiekt, podajemy źródlo  na ta sciezke do kompilowania
			.pipe(sass())						//kompiluje do sassa
			.pipe(gulp.dest("app/css")); //wyrzuc do folderu css (destination)
            .pipe(browserSync.reload({
                stream: true
            }))

});


// ZADANIE DOMOWE - MINIFY 
var uglifycss = require('gulp-uglifycss');
 
gulp.task("css", function () {
  gulp.src("app/css/**/*.css")
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('app/css/'));
});



// śledzi zmiany -sprawdza czy wystepuja jakies zmiany w pliku, jezeli tak to uruchamiamy sassa- czyli śledzenie pliku. sprawdza czy zrobiliśmy save - jak zrobilismy save tzn ze zmienilismy plik

gulp.task("watch", ["browserSync", "sass", "css"], function(){
	gulp.watch("app/scss/**/*.scss",["sass"]);
    gulp.watch("app/css/**/*.css", ["css"]);
	
});
