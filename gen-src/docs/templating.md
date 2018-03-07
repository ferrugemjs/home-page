---
id: templating
title: Template functions
sidebar_label: Templating
---

## Directive "if"

Conditional render with "if".

eg.
``` xml
<template>
  <div>
    <span if="this.name==='test'">name is test</span>
  </div>
</template>
```

## Tag "if"

Conditional flow with tag "if".

eg.
``` xml
<template>
    <if condition="this.name==='test'">
      <span>name is test</span>
    </if>
</template>
```

## Tags "if" and "else"

eg.
``` xml
<template>
  <div>
    <if condition="this.name==='test'">
      <span>name is test</span>
    <else>
      	<span>I dont know you!</span>
    </else>
    </if>
  </div>
</template>
```

## Tags "if" and "elseif"

eg.
``` xml
<template>
  <div>
    <if condition="this.name==='test'">
      <span>name is test</span>
    <elseif condition="this.name==='test2'">
      <span>ok, you are test2</span>
    </elseif>
    </if>
  </div>
</template>
```

## Tags "if","elseif" and "else"

eg.
``` xml
<template>
  <div>
    <if condition="this.name==='test'">
      <span>name is test</span>
      <elseif condition="this.name==='test2'">
        <span>ok, you are test2</span>
      </elseif>
      <else>
        <span>I dont know you!</span> 
      </else>
    </if>
  </div>
</template>
```

## Directive "each"

eg.
``` xml
<template>
 <ul>
  <li each="item in this.itens">${item.name}</li>
 </ul>
</template>
```

## Directive "each" with a custom index

eg.
``` xml
<template>
 <ul>
  <li each="item,$index in this.itens">${$index} - ${item.name}</li>
 </ul>
</template>
```

## Tag "for"

eg.
``` xml
<template>
 <ul>
  <for each="item in this.itens">
   <li>${item.name}</li>
  </for>
 </ul>
</template>
```



## Tag "for" with index

eg.
``` xml
<template>
 <ul>
  <for each="item,$index in this.itens">
   <li>${$index} - ${item.name}</li>
  </for>
 </ul>
</template>
```



## Directive "skip"

Conditional directive to avoid children rerender.

eg.
``` xml
<template>
  <div>
    <span skip="this.name==='test'">name is test</span>
  </div>
</template>
```

This is util when working with libs that dinamicaly insert itens into that node as [select2](https://select2.github.io/), [selectize](https://selectize.github.io/selectize.js/) and others.


## Conditional attribute


eg.
``` xml
<template>
  <div>
    <span>name is test</span>
	<input type="checkbox" checked="${this.name=='test'}"/>
	<input type="text" disable.if="this.maxPowerFool > 100"/>
	<select>
		<option value="1">one</option>
		<option value="2" selected.if="this.myIndex === 2">two</option>
		<option value="3">three</option>
	</select>
  </div>
</template>
```


## Importing other module

eg.
``` html
<template>
    <require from="./example/hello-world"/>
    <div>
      <h1>My First APP with ${this.title}</h1>
      <hello-world name="C-3PO"/>
    </div>
</template>
```



## Giving an alias in module import statement

eg.
``` html
<template>
    <require from="./example/hello-world as sea-bienvenido"/>
    <div>
      <h1>My First APP with ${this.title}</h1>
      <sea-bienvenido name="C-3PO"/>
    </div>
</template>
```

## Import a css, less, scss, sass or styl file

You need "plugin-css" for jspm or equivalent if you are using requirejs or webpack.

eg.
``` xml
<template>
    <!--if using 'plugin-css' systemjs-->
    <require from="./hello-world.css!"/>
    <!--if using commons css plugins to requirejs-->
    <require from="style!./hello-world"/>
    <!--to others commons css plugins-->
    <require from="css!./hello-world.css"/>
    <!--to webpack loaders-->
    <require from="./hello-world.css"/>
    <!--to webpack "scss" loaders-->
    <require from="./hello-world.scss"/>
    <!--to webpack "styl" loaders-->
    <require from="./hello-world.styl"/>
    <h1>My First APP with ${this.title}</h1>
</template>
```

## Embed a tag "style".

eg.
``` html
<template>
    <style>
    .especial-tag{
    	background-color:red;
    }
    </style>
    <h1 class="especial-tag">
	My First APP with ${this.title}
    </h1>
</template>
```

## Changing the css className

eg.
``` html
<template>
    <h3 class="my-custom-classname">
	My element with a custom className
    </h3>
</template>
```



## Changing the css className with expression

eg.
``` html
<template>
    <h3 class="${'my-custom-classname '+this.customStyle}">
	My element with a custom className by expression
    </h3>
</template>
```

## Tag "content"

Set where the content of element must be placed.

eg.
``` xml
<!--hello-world.html-->
<template>
 <h1>
  <content/>
 </h1>
</template>
```
Bellow is how "hello-world.html" will be used.

eg.
``` xml
<template>
    <require from="./example/hello-world"/>
    <div>
      <hello-world>
            Good night!
      </hello-world> 
    </div>
</template>
```

## Importing/using other library/script

eg.
``` html
<template>
  <require from="moment" type="script"/>
  <span>${moment().format('DD/MM/YYYY')}</span>
</template>
```


## Importing a ui library as a namespace

It is a basic example, but there are a more elaborate implementation at [twbs-hgo](https://github.com/hugolhmartins/twbs-hgo).

eg. of usage
``` xml
<template>
  <require from="ui-vendor as ui" type="namespace"/>	
  <div>
    <span>using a ui library</span>
    <ui:progress-bar/>
  </div>
</template>
```

## Creating a ui library as a namespace

eg. creation
``` javascript
// ui/index.js
import progress_bar from './progress-par/progress-par.html'; // .html will be .html.js
export {progress_bar}; // progress_bar will be used as ui:progress-bar
```


## Attribute "key:id"

When using attribute "key:id" the element instance will be preserved.

eg.
``` xml
<template>
  <require from="./test-comp"/>
  <div>
  <for each="item in this.itens">
     <test-comp key:id="${item.id}"/>
   </for>
  </div>
</template>
```
You shouldnt use this every moment, but it is recomended to use in a interation with tag "for".


## Directive "trigger"

This will associate a controller method to DOM event.

eg.
``` xml
<template>
  <button click.trigger="this.showName">show my name!</button>
</template>
```




## Directive "trigger" with paramaters

This will associate a controller method to DOM event with paramaters.

eg.
``` xml
<template>
  <button click.trigger="this.showName('test')">show my name!</button>
</template>
```

## CamelCase method or attribute

To access a camelCase method or attribute from template use slashes '-'.

eg.
``` xml
<template>
  <require from="./test-comp"/>
  <div>
    <test-comp full-name="test"/>
  </div>
</template>
```

## Controller method

Controller method into a custom element event.

eg.
``` xml
<template>
  <require from="./test-comp"/>
  <div>
    <test-comp on-change-name.subscribe="this.showName"/>
  </div>
</template>
```

### Tag "composition"

With composition you need use "view:from" to load the view.

eg.
``` xml
<template>
  <div>
    <compose view:from="path_to_dinamic_module/module_to_loader"/>
  </div>
</template>
```

## Template "model" attribute

eg.
``` xml
<!--view-one.html-->
<template model="./universal-view-model">
  <div>
    <h1>VIEW ONE</h1>
    <span>bla,bla,bla....</span>
  </div>
</template>
```

## Template "no-model" attribute

Template viewmodel-less with "no-model" attribute.

eg.
``` xml
<template no-model>
  <h1>NO viewmodel</h1>
</template>
```

## Function representation

If you have a function with a "export default" you can represent it in your template with a tag.

eg.
``` typescript
export default function(log:{}){ 
   console.log(log);
}
```
*** Using

``` xml
<template>
  <require from="./myfunctionlog as fn-log" type="script"/>
  <div>
        <fn-log msg="it is alive"/>
  </div>
</template>
```
Other example
``` typescript
//make your own router interface
import page = require("page");
export default (config:{path:string,setHandler:Function})=>{
	if(config.path && config.setHandler){
		page(config.path,context=>{
			config.setHandler(context.params);
		});
	}else{
		page.start();
	}
}
```
*** Using
``` xml
<template>
 <require from="../commons/router as add-router" type="script"/>
 <div>
  <add-router path="/user/:id" set-handler="this.edit"/>
 </div>
</template>	
```

## Tag "script"

Useful when working with some jquery plugins.

eg.
``` xml
<template>
 <require from="jquery as jq" type="script"/>
 <div>
   <span class="test"></span>
   <script>
 	jq(".test").hide();
   </script>
 </div>
</template>	
```

## Conditional script

eg.
``` xml
<template>
 <require from="jquery as jq" type="script"/>
 <div>
   <span class="test"></span>
   <script if="!this.hidden">
 	jq(".test").hide();
   </script>
 </div>
</template>	
```

## Scope of a component into "script" tag

Into a "script" tag the "this" scope is first attributed to component scope.

eg.
``` xml
<template>
 <require from="jquery as jq" type="script"/>
 <div>
   <span class="test"></span>
   <script if="!this.hidden">
 	  jq(".test").hide();
	  this.hidden = true;
   </script>
 </div>
</template>	
```
