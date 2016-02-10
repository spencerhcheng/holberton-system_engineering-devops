# Lecture Notes 9

## The Global Scope

In both of the main JavaScript environments (browser and node), everything exists
in whats called 'the global object'. To understand this, let's think about a plain
old object:

```
var scope = {};
{}
```

I can create key-value pairs where the value is of any data-type. Let's create a
function (method) in the object:

```
scope.myFunc = function(){
  console.log("This is my func");
};

```



## Importance of `var`

## Function Scope

## The scope of this

## Common JS Gotchas
