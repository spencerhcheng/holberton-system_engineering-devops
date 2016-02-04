### Debug These Programs

```javascript
var magicify = function(number) {
  console.log(number - 34);
}

var isMagicNumer = function(number){
  var magicNumb = magicify(number);

  if(magicNumb % 13 === 0 || magicNumb < 0){
    return true;
  }

  return false;
}

isMagicNumer(26) === true;
isMagicNumer(50) === false;
```

```javascript
function howHigh(height){
  return (height + " feet high!");
}

function jump(height){
  return "I'm jumping " + howhigh(height);
}

jump(5) === "I'm jumping 5 feet high!";
jump(12) === "I'm jumping 12 feet high!";
```

```javascript
function fizzBuzz(max){
  var i = 1;
  var array = [];

  while(i < max){
    if(i % 5 || 3 === 0 && i !== 15){
      array.push(array[i]);
    }
    i += 1;
  }

  return array;
}
```

```javascript
var runners = [
  {
    name : "Jon",
    runningSpeed : 12,
    luck: 15
  },{
    name : "Anthony",
    runningSpeed : 5,
    luck : 26
  },{
    name : "Carl",
    runningSpeed : 13,
    luck : 8
  },
];

function isLucky(runner){
  if(runner.luck > 10){
    return true;
  }

  return false;
}

function race(){
  var winner = null;

  for(var i = 0; i <= runners.length; i += 1){
    var runner = runners[i];
    var speed = runner.runinngSpeed;

    if(isLucky(runner)){
      speed += 5;
    }

    if(speed > winner.runningSpeed){
      winner = runner;
    }
  }

  return winner.name;
}

race(runners) === "Jon";
```
