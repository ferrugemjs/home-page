---
id: lifecycle
title: Lifecycle
sidebar_label: Lifecycle
---

## Component lifecycle

![Lifecycle Diagram](../img/lifecycle.png)

### Event attached

By implementing this method your module will be prompted for it once your component is in "DOM".

eg.
``` typescript
attached():void{
 console.log('im in DOM');
}
```

### Event detached

By implementing this method  your module will be prompted for it once your component is out of "DOM".

eg.
``` typescript
detached():void{
 console.log('im out');
}
```

### Event shouldRefresh

By implementing  this method you can decide if a component should refresh or not by returning true or false.

![Update flowchart](../img/lifecycle-refresh.png)

eg.
``` typescript
private shouldRefresh( new_props:ModuleA ):boolean{
	return this.title !== new_props.title;
}
```

### Event attributeChanged

By implementing this method your module will be notified when any attribute is changed.

eg.
``` typescript
attributeChanged( attrName:string, oldVal:any, newVal:any ):void{
	console.log(`attibute ${attrName} has changed!`);
}
```

### Async and await

Events "attached", "detached" and "attributeChanged" can be write with async annotation.

``` typescript
async attached(){
	let rs = await fetch('teste.json'); // or other promise
	console.log(rs.status);
}
```