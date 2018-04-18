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
    <input type="text" value="${this.name}"/>
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
    <input type="text" keyup.bind="this.name"/>
  </div>
</template>
```
## Manual event reactivity

eg.
``` xml
<template>
  <div>
    <h2>Hello World, ${this.name}</h2>
    <input type="text" change.trigger="this.manualChangeMethod"/>
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

## Event binding in select, checkbox and radiogroup.

Examples:

eg.
``` xml
<template>
  <div>
    <h2>Hello World, ${this.name}</h2>
    <input type="checkbox" value="y" change.bind="this.name"/>
    <select change.bind="this.name">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <br/>
    <label>
      <input name="rdgroup" type="radio" value="RED" change.bind="this.name"/> Red
    </label>
    <label>
      <input name="rdgroup" type="radio" value="GREEN" change.bind="this.name"/> Green
    </label>
    <label>
      <input name="rdgroup" type="radio" value="BLUE" change.bind="this.name"/> Blue
    </label>
  </div>
<template>
```