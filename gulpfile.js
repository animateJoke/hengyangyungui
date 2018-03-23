var gulp = require("gulp");
    htmlmin = require("gulp-htmlmin"),
    cssmin = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer')
    uglify = require('gulp-uglify');


gulp.task("html-min1", function(){
    gulp.src("src/*.html").pipe(htmlmin({
        collapseWhitespace : true,//压缩HTML
    })).pipe(gulp.dest("dist"));
});

gulp.task("html-min2", function(){
    gulp.src("src/management/*.html").pipe(htmlmin({
        collapseWhitespace : true,//压缩HTML
    })).pipe(gulp.dest("dist/management"));
});


gulp.task('css-min1', function(){
    gulp.src('src/css/*.css').pipe(cssmin({
            advanced : false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility : 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks : true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments : '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        })).pipe(gulp.dest('dist/css'));
});

gulp.task('css-min2', function(){
    gulp.src('"src/management/css/*.css"').pipe(cssmin({
        advanced : false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility : 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        keepBreaks : true,//类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments : '*'
        //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    })).pipe(gulp.dest('dist/management/css'));

});

gulp.task('testAutoFx1', function(){
    gulp.src('src/css/*.css').pipe(autoprefixer({
            browsers : ['last 2 versions', 'Android >= 4.0'],
            cascade : true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove : true //是否去掉不必要的前缀 默认：true
        })).pipe(gulp.dest('src/css'));
});
gulp.task('testAutoFx2', function(){
    gulp.src("src/management/css/*.css").pipe(autoprefixer({
        browsers : ['last 2 versions', 'Android >= 4.0'],
        cascade : true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove : true //是否去掉不必要的前缀 默认：true
    })).pipe(gulp.dest('src/management/css'));
});


gulp.task('jsmin1', function () {
    gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});
gulp.task('jsmin2', function () {
    gulp.src('src/management/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/management/js'));
});
gulp.task("default", ["html-min1","html-min2",'testAutoFx1','testAutoFx2','css-min1','css-min2']);
