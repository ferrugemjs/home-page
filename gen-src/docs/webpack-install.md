---
id: webpack-install
title: With webpack
sidebar_label: With webpack
---

## Recommendation

We strongly recommend that you use our ["getting started page"](getting-started.md) when working with webpack, but you still can use this section to understand better that project.


## Install
``` npm
npm i ferrugemjs --save
npm i ferrugemjs-loader --save-dev
```
## Configuration

add 'ferrugemjs-loader' to your rules and alias
``` javascript
// webpack.config.js
entry: {
    app:['ferrugemjs/bootstrapper']
},
module: {
	rules: [
	    {
	      test: /\.html$/,
	      loader:'ferrugemjs-loader'
	    }
	]
},
,resolve: {
    extensions: [".js",".html"]
    ,alias:{
    	"app":__dirname + '/src'
		,"root_app":__dirname + '/app' //you can use this path alias or load with 'ferrugemjs/platform'
    	,"ferrugemjs":"ferrugemjs/dist/core"
    }
 }
```

## Initialization

FerrugemJS will look for the first page element with the attribute "app" to start the application and if not found it, will use the tag "body".
Just create app.js files and app.html in the same directory of the index.html page.

### Custom loading

To work with webpack there is 'ferrugemjs/bootstrapper' as a application bootstrapping. So replace 'ferrugemjs/bootstrapper' from 'entry' section of webpack to a new entry file (eg. init.js) and import it direct from your new file 'init.js' in 'entry' section.
``` javascript
// webpack.config.js
entry: {
    app:['init.js']
},
```
``` javascript
// init.js
import bootstrapper from "ferrugemjs/bootstrapper";
```
or with 'ferrugemjs/platform' as a application bootstrapping.
``` javascript
import platform from "ferrugemjs/platform";
import init_app from "./init-app";

platform
    .bootstrap(init_app)
    .at(
        document.getElementById("init_app_id")
    );
```