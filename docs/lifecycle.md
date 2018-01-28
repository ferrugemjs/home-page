---
id: lifecycle
title: Lifecycle
sidebar_label: Lifecycle
---

## Component lifecycle


![Lifecycle Diagram](../img/lifecycle.png)


### Component  connectedCallback

By implementing the method your module will be prompted for it once your component is in "DOM".

eg.
``` typescript
connectedCallback(){
 console.log('im in DOM');
}
```

### Component  disconnectedCallback

By implementing the method your module will be prompted for it once your component is detached from "DOM".

eg.
``` typescript
disconnectedCallback(){
 console.log('im out');
}
```

### Component shouldUpdateCallback

By implementing the method "shouldUpdateCallback" you can decide if a component should refresh or not by returning true or false.

eg.
``` typescript
  private shouldUpdateCallback(new_props:ModuleA):boolean{
    return this.title !== new_props.title;
  }
```

### Component attributeChangedCallback

By implementing these method your module will be notified when any attribute is changed.

eg.
``` typescript
attributeChangedCallback(attrName, oldVal, newVal){
 console.log(`attibute ${attrName} has changed!`);
}
```
