---
id: requirejs-install
title: With requirejs
sidebar_label: With requirejs
---

## Install
``` npm
npm i ferrugemjs --save
npm install requirejs --save
npm install gulp gulp-ferrugemjs --save-dev
```

## Configuration
``` html
<head>
	<meta charset="utf-8">
	<title>Test Project</title>
	<script src="node_modules/requirejs/require.js"></script>
</head>
<body>    
<div app></div>
<script>
  requirejs.config({
    baseUrl: '.',
    paths: {
      "ferrugemjs":"dist/core",
      "incremental-dom":"node_modules/incremental-dom/dist/incremental-dom-min"
    }
  });
  require(["ferrugemjs/bootstrapper"]);
</script>
```
## Initialization

FerrugemJS will look for the first page element with the attribute "app" to start the application and if not found it, will use the tag "body".
Just create app.js files and app.html in the same directory of the index.html page.

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
