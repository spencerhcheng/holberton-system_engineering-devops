### Predict The Output and Fix the Code

```javascript
var dog = {
  age : 5,

  live : function(){
    setInterval(function(){
      this.age += 1;

      if(this.age < 15){
        console.log("Dog lives another dat at age " + this.age);
      } else {
        console.log("Dog has been dead for " + (this.age - 15) + " years");
      }
    }.bind(dog), 1000);
  }
}

//What will happen when we run this? Make a prediction, then test.
//Call over an instructor if you need help understanding what happened
//Now fix it.
dog.live();
```
---------------------------------------------------------------------------
```javascript
var annoyingDancer = {
  favoriteDances: ["salsa", "waltz", "hip-hop"],

  currentFav : 0,

  askQuestion : function(){
    var currentFavDance = this.favoriteDances[this.currentFav];
    console.log("Do you want to dance " + currentFavDance + "with me?");

    this.currentFav += 1;

    if(this.currentFav === this.favoriteDances.length){
      this.currentFav = 0;
    }

    setTimeout(this.askQuestion 1000);
  }
}

//What will happen when we run this? Make a prediction, then test.
//Call over an instructor if you need help understanding what happened
//Now fix it.
annoyingDancer.askQuestion()
```
---------------------------------------------------------------------------

### Clock

For this mini-project, you will create a clock that ticks every second, displaying the current time.

0. READ ALL OF THE INSTRUCTIONS FIRST! Ask questions if you don't understand something.

1. Create a `clock` object;

2. Give it a property `totalSeconds` that starts at 0;

3. Write a method `getSeconds` that will return second count of our clock. It should return a value from 00 to 59, just like a normal clock.

  - *hint:* Think about this is terms of `totalSeconds`. If `totalSeconds` equals `10`, then this method should return `"10"`. If `totalSeconds` is `61` (01:01), this method should return `"01"`.

  - *hint:* Play with the modulus operator. If I modulo `x` by `i` (`x % i`), will the result ever be greater than `i`?

  - *hint:* If the value is less than 9, you may have to append a 0 to the beginning

4. Test you `getSeconds` method. Open node an manually set the `totalSeconds` and make sure `getSeconds` is giving you the right value. Test cases below:

  - If `clock.totalSeconds = 0`, `clock.getSeconds()` will evaluate to `"00"`

  - If `clock.totalSeconds = 9`, `clock.getSeconds()` will evaluate to `"09"`

  - If `clock.totalSeconds = 13`, `clock.getSeconds()` will evaluate to `"13"`

  - If `clock.totalSeconds = 60`, `clock.getSeconds()` will evaluate to `"00"`

  - If `clock.totalSeconds = 1342`, `clock.getSeconds()` will evaluate to `"22"`

5. Write a method `getMinutes` that will return minute count of our clock. It should return a value from 00 to 59, just like a normal clock.

  - *hint:* Write this in terms of `totalSeconds`, not the result of `getSeconds`? Can you determine why? Think about it and if you're having trouble, call over the instructor.

  - *hint:* This will involve a few mathematical operations.How many minutes is 120 seconds? 2 minutes. What math do we intuitively use to determine that?

  - *hint:* How many minutes are in 135 seconds? Still only 2 minutes. The
  remainder exists as the second count. You may have to use some `Math` (hint hint) for cases like this.

6. Test your `getMinutes` method:

  - If `clock.totalSeconds = 0`, `clock.getMinutes()` will evaluate to `"00"`

  - If `clock.totalSeconds = 40`, `clock.getMinutes()` will evaluate to `"00"`

  - If `clock.totalSeconds = 60`, `clock.getMinutes()` will evaluate to `"01"`

  - If `clock.totalSeconds = 134`, `clock.getMinutes()` will evaluate to `"02"`

  - If `clock.totalSeconds = 4342`, `clock.getMinutes()` will evaluate to `"12"`

7. Write a method `getHours` that will return minute count of our clock. It can return any value from 00 to being arbitrarily high (i.e 72)

8. Test `getHours`
  - If `clock.totalSeconds = 0`, `clock.getHours()` will evaluate to `"00"`

  - If `clock.totalSeconds = 200`, `clock.getHours()` will evaluate to `"00"`

  - If `clock.totalSeconds = 4342`, `clock.getHours()` will evaluate to `"01"`

  - If `clock.totalSeconds = 20000`, `clock.getHours()` will evaluate to `"05"`

  - If `clock.totalSeconds = 900000`, `clock.getHours()` will evaluate to `"250"`

9. Write a method `printTime` that logs the time in clock format.
  - Use `getHours`, `getMinutes`, and `getSeconds`

  - You will need to do some concatenation

  - If `clock.totalSeconds = 0`, `clock.printTime()` will log `"00:00:00"`

  - If `clock.totalSeconds = 200`, `clock.printTime()` will log `"00:03:20"`

  - If `clock.totalSeconds = 3871`, `clock.printTime()` will log `"01:04:31"`

10. Write a method `tick(startSecond)`. What is method should do is outlined below:
  - If `startSecond` was passed in (we'll make it optional), set `totalSeconds` to be equal to it.

  - Increment `totalSeconds`.

  - Print the current time to the console.

  - Using either `setTimeout` or `setInterval`, make this behavior repeat itself every second. Remember, arguments in Javascript are optional, so no
  need to worry about constantly setting the `startSecond` parameter.

  -Test is out. When you're done, you'll have a clock that prints our the new time every second!

11. **Bonus:** Try writing `tick` using both `setTimeout` and `setInterval`! I called my methods `intervalTick` and `timeoutTick`
