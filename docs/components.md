---
id: components
title: Components
sidebar_label: Working with components
---

## Create components

To create a components witch will be a custom tag do you need two files with same name(eg. "module-a.ts" and "module-a.html").
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

## With javascript basic function or “immediately invoked” function using AMD
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

## With javascript es6 class syntax
``` javascript
export class ModuleA{
    constructor(){
      this.title = "test!";
    }
}
```
## With Typescript

``` typescript
export class ModuleA{
    private title:string;
    constructor(){
      this.title = "test!";
    }
}
```
### We recommend Typescript to large/medium projects because it´s language features.
