# Arrays

### logEach

Write a function `logEach(array)` that prints every element of the array and it's
index to the console . Example:

```
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
```

### maxValue

Write a function `maxValue(array)` that returns the largest value in the array.
Assume `array` is an array of numbers.

### minMaxDifference

Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers.

### printRange

Write a function `printRange(start, end)` that prints all the numbers in between
`start` and `end`. If a range doesn't exist (start > end), then print a little
message instead. Example:

```
> printRange(22, 24)
22
23
24

> printRange(5, 1)
Bad Range
```


### Cat in Hats

You have 100 cats (You are quite lucky to own so many cats!). You have arranged
all your cats in a line. Initially, none of your cats have any hats. You take
100 rounds walking around the cats, always starting at the beginning. Every time
you stop at a cat, you put a hat on it if it doesn't have one, and you take its
hat off if it has one on. The first round, you stop at every cat. The second
round, you only stop at every 2nd cat (#2, #4, #6, #8, etc.). The third round,
you only stop at every 3rd cat (#3, #6, #9, #12, etc.). You continue this
process until the 100th round (i.e. you only visit the 100th cat).

Write a program that prints which cats have hats at the end.
