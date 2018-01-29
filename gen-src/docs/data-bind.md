---
id: data-bind
title: Binding
sidebar_label: Binding
---

## One-way data binding

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
## Event binding

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
## Manual event reactivity

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
