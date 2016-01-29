# Problem Set

### Debug The Programs

```
var cat = {
  sound : "Meowr",
  purr : function(){
    return (sound + "..." + sound);
  }
}

cat.purr() === "Meowr...Meowr";
```

```
function getPropsAndMethods(object){
  var propsAndMethods = { props : [], methods : [] };

  for(var x in object){
    if(typeof x === 'function'){
      propsAndMethods.methods.push(x);
    } else {
      propsAndMethods.props.push(x);
    }
  }

  return propsAndMethods;
}

var cat = {
  name : "Kitty",
  age : 7,
  purr : function(){
    return ("The " + this.age +" year old kitty purrs...");
  }
};

getPropsAndMethods(cat) === { props : ["name", "age"], methods : ["purr"] }
```

```

```

### Predict The Output
