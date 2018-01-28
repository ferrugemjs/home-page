---
id: pug-configuration
title: Working with pug 
sidebar_label: Working with pug
---

## About using other template format

FerrugemJS support working with any template format since it transpile to html format.
These section will show how to do it with [pugjs](https://pugjs.org/api/getting-started.html) .

## Install
``` 
npm install --save-dev pug pug-html-loader
```

## Initialization
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