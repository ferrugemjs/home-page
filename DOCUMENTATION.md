### home
https://ferrugemjs.github.io/home-page/documentation.html

### github
https://github.com/ferrugemjs/library

### examples
https://ferrugemjs.github.io/examples/index.html

### getting started
https://ferrugemjs.github.io/home-page/getting-started.html

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

Otherwise a module can be written in different forms as below:

### javascript basic function or “immediately invoked” function with requirejs
``` javascript
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ModuleA = (function () {
        function ModuleA() {
            this.title = "test!";
        }
        return ModuleA;
    }());
    exports.ModuleA = ModuleA;
});
```

### With "new" javascript class syntax with babel or other prefer transpile
``` javascript
export class ModuleA{
    constructor(){
      this.title = "test!";
    }
}
```
### We recommend Typescript to large/medium projects because language features

``` typescript
export class ModuleA{
    private title:string;
    constructor(){
      this.title = "test!";
    }
}
```

### module lifecycle


![Lifecycle Diagram](/assets/img/lifecycle.png)


#### connectedCallback

By implementing the method your module will be prompted for it once your component is in "DOM".

eg.
``` typescript
connectedCallback(){
 console.log('im in DOM');
}
```



#### disconnectedCallback

By implementing the method your module will be prompted for it once your component is detached from "DOM".

eg.
``` typescript
disconnectedCallback(){
 console.log('im out');
}
```



#### attributeChangedCallback

By implementing these method your module will be notified when any attribute is changed.

eg.
``` typescript
attributeChangedCallback(attrName, oldVal, newVal){
 console.log(`attibute ${attrName} has changed!`);
}
```

#### component refresh from modelview

Controller refresh.

eg.
``` typescript
export class ModuleA{
  private title:string;
  private refresh:Function;//necessary if you want avoid typescript warnings
  doAnyThing(){
    this.title = "new Title";
    this.refresh();
  }
}
```

#### component refresh with state

Controller refresh with new modelview values equivalent to 'setState' of react.

eg.
``` typescript
export class ModuleA{
  private title:string;
  private refresh:Function;//necessary if you want avoid typescript warnings
  doAnyThing(){
    this.refresh({title:"new Title"});//equivalent to "setState of react"
  }
}
```

#### refresh with callback

eg.
``` typescript
export class ModuleA{
  private inc:number=0;
  private refresh:Function;//necessary if you want avoid typescript warnings
  private increment(){
	this.refresh( state => ({
		inc:state.inc + 2
	}));
  }
}
```

#### component shouldUpdateCallback

By implementing the method "shouldUpdateCallback" you can decide if a component should refresh or not by returning true or false.

eg.
``` typescript
  private shouldUpdateCallback(new_props:ModuleA):boolean{
    return this.title !== new_props.title;
  }
```

#### one-way data binding

With 'value="${this.name}"' in a input it will set the "value" attribute after a controller refresh.

eg.
``` html
<template>
  <div>
    <h2>Hello World, ${this.name}</h2>
    <input value="${this.name}"/>
  </div>
</template>
```



#### event binding

With 'keyup.bind="this.name"' in a input it will change the "name" attribute in controller after a keyup event.

eg.
``` xml
<template>
  <div>
    <h2>Hello World, ${this.name}</h2>
    <input keyup.bind="this.name"/>
  </div>
</template>
```



### manual event reactivity

eg.
``` xml
<template>
  <div>
    <h2>Hello World, ${this.name}</h2>
    <input change.trigger="this.manualChangeMethod"/>
  </div>
</template>
```

``` typescript
export class HelloWorld{
  private name:string;
  private refresh:Function;//necessary if you want avoid typescript warnings
  constructor(){
    this.name = "";
  }
  manualChangeMethod(event):void{	
	//a reactive update after 'anyMethod' is calling
	this.name = event.target.value;
	this.refresh();
  }
}
```

### router

There are a basic implamentation at [ferrugemjs-router](https://github.com/ferrugemjs/router).


### template stuff



#### if

Conditional render with if.

eg.
``` xml
<template>
  <div>
    <span if="this.name==='test'">name is test</span>
  </div>
</template>
```



#### tag if

conditional flow with tag if condition.

eg.
``` xml
<template>
    <if condition="this.name==='test'">
      <span>name is test</span>
    </if>
</template>
```


#### Tags if,else

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



#### Tags if,elseif

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



#### Tags if,elseif,else

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



#### Loop render with each

eg.
``` xml
<template>
 <ul>
  <li each="item in this.itens">${item.name}</li>
 </ul>
</template>
```



#### Loop render with a custom index

eg.
``` xml
<template>
 <ul>
  <li each="item,$index in this.itens">${$index} - ${item.name}</li>
 </ul>
</template>
```



#### Tag for each

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



#### Tag for each with index

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



#### skip

Conditional children render with skip.

eg.
``` xml
<template>
  <div skip="this.name==='test'">
    <span>name is test</span>
  </div>
</template>
```

This is util when working with libs that dinamicaly insert itens into that node as [select2](https://select2.github.io/), [selectize](https://selectize.github.io/selectize.js/) and others.


#### conditional attribute


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


#### import other module

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



#### give an alias in module import statement

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



#### import a css/less/scss file

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
    <h1>My First APP with ${this.title}</h1>
</template>
```



#### embed a style tag

eg.
``` html
<template>
    <style>
    .especial-tag{
    	background-color:red;
    }
    </style>
    <h1 class="especial-tag">My First APP with ${this.title}</h1>
</template>
```



#### change the css className

eg.
``` html
<template>
    <style>
    .my-custom-classname{
      background-color:red;
    }
    </style>
    <h3 class="my-custom-classname">My element with a custom className</h3>
</template>
```



#### change the css className with expression

eg.
``` html
<template>
    <style>
    .style1{
      background-color:red;
    }
    .style2{
      background-color:blue;
    }
    .style3{
      background-color:green;
    }
    </style>
    <h3 class="${'my-custom-classname '+this.customStyle}">My element with a custom className by expression</h3>
</template>
```



#### set where the content of element must be placed

eg.
``` xml
<!--hello-world.html-->
<template>
 <h1>
  <content/>
 </h1>
</template>
```
Bellow is as "hello-world.html" will be used.

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



#### import other library/script

eg.
``` html
<template>
  <require from="moment" type="script"/>
  <span>${moment().format('DD/MM/YYYY')}</span>
</template>
```


#### import other ui library as a namespace

It is a basic example, but there are a example more elaborate at [ferrugemjs-router](https://github.com/ferrugemjs/router).

eg.
``` xml
<template>
  <require from="ui-vendor as ui" type="namespace"/>	
  <div>
    <span>using a ui library</span>
    <ui:progress-bar/>
  </div>
</template>
```


#### preserve a element instance

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
You shouldnt use this every moment, but it is recomended to use in a  interation with tag "for" ou instruction "each".


#### associate a controller method to DOM event

eg.
``` xml
<template>
  <button click.trigger="this.showName">show my name!</button>
</template>
```



#### controller method to DOM event with paramaters

eg.
``` xml
<template>
  <button click.trigger="this.showName('test')">show my name!</button>
</template>
```



#### camelCase method or attribute

to access a camelCase method or attribute from template use slashes '-'.

eg.
``` xml
<template>
  <require from="./test-comp"/>
  <div>
    <test-comp full-name="test"/>
  </div>
</template>
```



#### controller method into a custom element event

eg.
``` xml
<template>
  <require from="./test-comp"/>
  <div>
    <test-comp on-change-name.subscribe="this.showName"/>
  </div>
</template>
```



### composition

with composition you need  use the same id an key:id to load the view.

eg.
``` xml
<template>
  <div>
    <compose id="_unique_id_" key:id="_unique_id" view:from="path_to_dinamic_module/module_to_loader"/>
  </div>
</template>
```



#### custom view-model

eg.
``` xml
<!--view-one.html-->
<template view-model="./universal-view-model">
  <div>
    <h1>VIEW ONE</h1>
    <span>bla,bla,bla....</span>
  </div>
</template>
```
``` xml
<!--view-two.html-->
<template view-model="./universal-view-model">
  <div>
    <h3>VIEW TWO</h3>
    <p>lol lol lol</p>
    <img src="logo.png"/>
  </div>
</template>
```



#### template viewmodel-less

eg.
``` xml
<template no-view-model="true">
  <h1>NO viewmodel</h1>
</template>
```

#### function representation

If you have a function with a "export default" you can represent it in your template with a tag.

eg.
``` typescript
export default function(log:{}){ 
   console.log(log);
}
```

``` xml
<template>
  <require from="./myfunctionlog as fn-log" type="script"/>
  <div>
        <fn-log msg="it is alive"/>
  </div>
</template>
```
other example
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
using
``` xml
<template>
 <require from="../commons/router as add-router" type="script"/>
 <div>
  <add-router path="/user/:id" set-handler="this.edit"/>
 </div>
</template>	
```



### power ups!

When you need more power then...

#### tag script

useful when working with some jquery plugins.

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

#### conditional script

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


#### scope into script


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


- [Browser Support](#browser-support)
- [examples](#examples)
- [how to start](#how-to-start)
- install
	- [individual install](#individual-install)
	- [with requirejs](#with-requirejs)
	- [with webpack](#with-webpack)
	- [with jspm](#with-jspm)
	- [initialization](#initialization)
- [modules & custom tags](#modules--custom-tags)
- [module lifecycle](#module-lifecycle)
	- [attached](#attached)
	- [detached](#detached)
	- [set+attribute name](#setattribute-name)
	- [component refresh from modelview](#component-refresh-from-modelview)
	- [component refresh with state](#component-refresh-with-state)
	- [component shouldUpdate](#component-shouldupdate)
	- [one-way data binding](#one-way-data-binding)
	- [event binding](#event-binding)
- [manual event reactivity](#manual-event-reactivity)
- [router](#router)
- [template stuff](#template-stuff)
	- [if](#if)
	- [tag if](#tag-if)
	- [Tags if,else](#tags-ifelse)
	- [Tags if,elseif](#tags-ifelseif)
	- [Tags if,elseif,else](#tags-ifelseifelse)
	- [Loop render with each](#loop-render-with-each)
	- [Loop render with a custom index](#loop-render-with-a-custom-index)
	- [Tag for each](#tag-for-each)
	- [Tag for each with index](#tag-for-each-with-index)
	- [skip](#skip)
	- [import other module](#import-other-module)
	- [give an alias in module import statement](#give-an-alias-in-module-import-statement)
	- [import a css file](#import-a-css-file)
	- [embed a style tag](#embed-a-style-tag)
	- [change the css className](#change-the-css-className)
	- [change the css className with expression](#change-the-css-classname-with-expression)
	- [set where the content of element must be placed](#set-where-the-content-of-element-must-be placed)
	- [import other library/script](#import-other-libraryscript)
	- [import other ui library as a namespace](#import-other-ui-library-as-a-namespace)
	- [preserve a element instance](#preserve-a-element-instance)
	- [associate a controller method to DOM event](#associate-a-controller-method-to-DOM-event)
	- [controller method to DOM event with paramaters](#controller-method-to-DOM-event-with paramaters)
	- [camelCase method or attribute](#camelcase-method-or-attribute)
	- [controller method into a custom element event](#controller-method-into-a-custom-element event)
- [composition](#composition)
	- [custom view-model](#custom-view-model)
	- [template viewmodel-less](#template-viewmodel-less)
	- [function representation](#function-representation)
- [power ups!](#power-ups)
	- [tag script](#tag-script)
	- [conditional script](#conditional-script)
	- [scope into script](#scope-into-script)
