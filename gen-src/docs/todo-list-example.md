---
id: todo-list-example
title: Todo List Example
sidebar_label: Todo List Example
---

## Template

``` xml
<template>
	<div>
		<ol>
			<li each="todo in this.todos">
				<em>${todo}</em>
			</li>
		</ol>
		<input type="text" value="${new String('')}" change.bind="this.desc">
	</div>
</template>
```

## JavaScript

``` typescript
export class TodoList{	
	constructor(){
		this.todos = ['do a test'];
	}
	set desc(desc){
		if(desc.trim()){
			this.todos.push(desc);
		}
	}
}
```
