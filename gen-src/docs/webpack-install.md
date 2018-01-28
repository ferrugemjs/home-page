---
id: webpack-install
title: With webpack
sidebar_label: With webpack
---

## Install
``` npm
npm i ferrugemjs --save
npm i ferrugemjs-loader --save-dev
```
## Configuration

add 'ferrugemjs-loader' to your rules and alias
``` javascript
//webpack.config.js
module: {
	rules: [
	    {
	      test: /\.html$/
	      ,loader:'ferrugemjs-loader'
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

to work with webpack there is 'ferrugemjs/bootstrapper' as a application bootstrapping.
``` javascript
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