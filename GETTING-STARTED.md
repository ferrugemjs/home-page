### home
https://ferrugemjs.github.io/home-page/documentation.html

### github
https://github.com/ferrugemjs/library

### examples
https://ferrugemjs.github.io/examples/index.html

### documentation
https://ferrugemjs.github.io/home-page/documentation.html

### how to start
clone
[skeleton-typescript](https://github.com/ferrugemjs/skeleton-typescript) (recomended way)
<p>or
[skeleton-webpack](https://github.com/ferrugemjs/skeleton-webpack) (webpack + babel)

### individual install

npm i ferrugemjs --save

#### with requirejs

npm i ferrugemjs --save

#### with webpack

npm i ferrugemjs --save

npm i ferrugemjs-loader --save-dev

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

You still need choose/configure a transpiler (recomended, see [documentation modules & custom tags section](DOCUMENTATION.md)) or use "functions" with define as below:
``` javascript
define(["exports"], function (exports) {
	exports.ModuleA = function(){};
});
```




#### with jspm

jspm install npm:ferrugemjs

npm install --save-dev gulp-ferrugemjs


#### initialization

eg. index.html file

``` html
  <body>
    <div app></div>
    <script>
      System.import("ferrugemjs/bootstrapper");
    </script>
  </body>
```
FerrugemJS will look for the first page element with the attribute "app" to start the application and if not found it, will use the tag "body".
Just create app.ts files and app.html in the same directory of the index.html page.
If you want to modify the path of the init file just add this information to the app attribute as below:
``` html
<div app="other_path/init_app_file"></div>
```
### modules & custom tags

To create a module witch will be a custom tag do you need two files with same name(eg. "module-a.ts" and "module-a.html").
By convention FerrugemJS know that "module-a.ts" is a controller file and "module-a.html" is the view of it and you can easily import it into your main app html file or into other module and use as a component with a custom tag.

eg. 
"module-a.ts" file.
``` typescript
export class ModuleA{
    private title:string;
    constructor(){
      this.title = "test!";
    }
}
```

eg. "module-a.html" file.
``` html
<template>
    <h1>My First APP with ${this.title}</h1>
</template>
```

now, we can importe into other template
``` xml
<template>
    <require from="./module-a"/>
    <div>
      <module-a title="new title!"/>
    </div>
</template>
```

Your application is ready and running in http://127.0.0.1:3333 if you are using [skeleton-typescript](https://github.com/ferrugemjs/skeleton-typescript) .


### others template format, example with [pug](https://pugjs.org/api/getting-started.html):

``` 
npm install --save-dev pug pug-html-loader
```
in "index.html"
``` html
 <div app="hello-world/hello-world" template-extension=".pug"></div>
```
in "webpack.config.js"
``` javascript
{
 test: /\.pug$/,
 loaders: [
    {loader:'ferrugemjs-loader' ,options:{ templateExtension:".pug" }},
    'pug-html-loader'
    ]
}
```









