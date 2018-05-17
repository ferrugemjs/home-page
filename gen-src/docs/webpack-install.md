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
    app:['init.js']
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
    	"@":__dirname + '/src'
    }
 }
```

### Loading

To work with webpack there is 'ferrugemjs' as a application bootstrapping. So in entry file (eg. init.js) import it direct from your new file 'init.js' in 'entry' section.
``` javascript
// init.js
import { bootstrapper } from "ferrugemjs";
bootstrapper();
```
or with 'ferrugemjs' as a platform.
``` javascript
import { platform } from "ferrugemjs";
import init_app from "./init-app";

platform
    .bootstrap(init_app)
    .at(
        document.getElementById("init_app_id")
    );
```

## Initialization

FerrugemJS will look for the first page element with the attribute "app" to start the application and if not found it, will use the tag "body".
Just create app.js files and app.html in the same directory of the index.html page.
