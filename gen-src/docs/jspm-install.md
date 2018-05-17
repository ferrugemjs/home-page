---
id: jspm-install
title: With jspm
sidebar_label: With jspm
---

## Install
``` npm
jspm install npm:ferrugemjs
npm install --save-dev gulp gulp-ferrugemjs
```

## Initialization

eg. index.html file

``` html
  <body>
    <div app></div>
    <script>
      System.import("ferrugemjs").then(fjs => fjs.bootstrapper());
    </script>
  </body>
```
FerrugemJS will look for the first page element with the attribute "app" to start the application and if not found it, will use the tag "body".
Just create app.ts files and app.html in the same directory of the index.html page.
If you want to modify the path of the init file just add this information to the app attribute as below:
``` html
<div app="other_path/init_app_file"></div>
```

## Compile

Create a task to compile a template html to js as bellow:

In gulpfile.js
``` javascript
var gulp = require('gulp');
var rename = require('gulp-rename');
var ferrugemjs = require('gulp-ferrugemjs');

gulp.task('ferrugem2js',function(){
    return gulp.src([
        "./src/**/*.html"
    ])
    .pipe(ferrugemjs())
    .pipe(rename({
        extname: ".html.js"
    }))
    .pipe(gulp.dest('folder/dist'));
});

```