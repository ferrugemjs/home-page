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
``` js
attached(){
 console.log('im in DOM');
}
```

### Event detached

By implementing this method  your module will be prompted for it once your component is out of "DOM".

eg.
``` js
detached(){
 console.log('im out');
}
```

### Event attributeChanged

By implementing this method your module will be notified when any attribute is changed.

eg.
``` js
set name( newVal ){
	console.log(`attibute name has changed to ${newVal}!`);
}
```

### Async and await

Events "attached", "detached" and "attributeChanged" can be write with async annotation.

``` js
async attached(){
	let rs = await fetch('teste.json'); // or other promise
	console.log(rs.status);
}
```