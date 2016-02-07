### Debug These Programs

```javascript
function unique(array){
  var uniqueArray = [];

  for(var i = 0, i <= array.length, i += 1){
    var ele = array[i];

    if(uniqueArray.indexOf(ele) === -1){
      uniqueArray.push(ele);
    }
  }
}

unique([1,23,2,4,5,1,23]) === [1, 23, 2, 4, 5];
```

```javascript
function isHappy(person){
  if(person.happiness > 5){
    return true;
  }
  return false;
}

function isHappyGroup(group){
  var amount = 0;

  for(var i = 0; i < group.length; i += 1){
    var person = group[i];

    if(isHappy[person]){
      amount += 1;
    }
  }

  if(amount > 5){
    return true;
  }

  return false;
}

var people = [
  { happiness : 5},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 3},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

isHappyGroup(people) === false;
```

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
