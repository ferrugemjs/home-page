---
id: update-component
title: Update component state
sidebar_label: Update component
---

## Update flowchart

![Update flowchart](../img/lifecycle-refresh.png)

## Refresh function

Use the "refresh" method to update the component from its controller file.

eg.
``` typescript
export class ModuleA{
  private title:string;
  private refresh:Function;// necessary if you want avoid typescript warnings.
  doAnyThing(){
    this.title = "new Title";
    this.refresh();
  }
}
```

## Refresh with state

You can pass props values in refresh as 'setState' of react.

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

## Refresh with callback

You can pass a function.

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

## Refresh with promise

You can pass a promise.

eg.
``` typescript
export class ModuleA{
  private inc:number=0;
  private refresh:Function;//necessary if you want avoid typescript warnings
  private increment(){
   this.refresh(
    new Promise(success => {
      setTimeout( _ => success({ inc:this.inc+1 }),2000);
    })
   );
  }
}
```

## Tag refresh

See tag refresh in [templating](templating.md) page.