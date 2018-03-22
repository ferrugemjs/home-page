---
id: pug-configuration
title: Working with pugjs
sidebar_label: Working with pugjs
---

## About using other template formats

FerrugemJS support working with any template format since it transpile to raw html.
In these section we will help you to do it, but you can meybe prefer using our [official branch](https://github.com/ferrugemjs/skeleton-webpack/tree/to-pug) with [pugjs](https://pugjs.org/api/getting-started.html) already installed.

## Install
``` npm
npm install --save-dev pug pug-html-loader
```

## Initialization
in "index.html"
``` html
 <div app="hello-world" template-extension=".pug"></div>
```
in "webpack.config.js"
``` javascript
module: {
	loaders: [
		{
			test: /\.pug$/,
			loaders: [
				{ loader: "ferrugemjs-loader", options: { templateExtension: ".pug" }},
				"pug-html-loader"
			]
		}
		//... others loaders
	]
},
resolve: {
 	extensions: [".ts", ".pug", ".js"],
	alias: {
		//... alias
	}
}
```
in "hello-world.pug"

``` jade
template
	.hello-world
		h1(alt="hello world") Hello world!
```