### Finish [Clock](../d2/clock.md) Project!

### Predict The Output and Determine the value of `this`

```javascript
function foo(){
  console.log(this.name);
}

var cat = {
  name : "whiskers"
}

var dog = {
  name : "rover"
}

foo(); //<=
foo.bind(cat)(); //<=
dog.foo(); //<=
```
--------------------------------------------------------------------------------
```javascript
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

var dog = {
  name : "rover"
}

var bar = cat.foo.bind(dog);

bar() //<=
```
--------------------------------------------------------------------------------
```javascript
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

setTimeout(cat.foo, 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
```
--------------------------------------------------------------------------------
```javascript
global.name = "currie";

var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
};

var dog = {
  name : "rover"
};


setTimeout(cat.foo.bind(this), 1000);
//When the timeout callback runs, predict output of that function and the value of `this`
```
--------------------------------------------------------------------------------
```javascript
var cat = {
  name : "whiskers",

  foo : function(){
    console.log(this.name);
  }
}

var dog = {
  name : "rover"
}

setTimeout(cat.foo.bind(dog), 1000);
```
