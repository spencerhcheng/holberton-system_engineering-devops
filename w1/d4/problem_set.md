# Problem Set

### Debug The Programs

```javascript
var cat = {
  sound : "Meowr",
  purr : function() {
    return (sound + "..." + sound);
  }
}

cat.purr() === "Meowr...Meowr";
```

### Predict The Output

```javascript
var dog1 = { name: 'Rover', age: 2 };
var dog2 = { name: 'Curie', age: 7 };
var dog3 = { name: 'Maxie', age: 15 };

var dogs = [dog1, dog2, dog3];

function howOld(array) {
  var result = [];

  for(var i = 0; i < array.length; i += 1) {
    var element = array[i];

    if(element.age < 7) {
      sentence = element.name + " is " + element.age + " years young.";
    } else {
      sentence = element.name + " is " + element.age + " years old.";
    }

    result.push(sentence);
  }

  return result;
}

howOld(dogs);
```
