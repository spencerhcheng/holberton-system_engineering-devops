### `String.prototype.split()` and `Array.prototype.join()`

`String.prototype.split()` - splits a string into an array of substrings on the separator and returns the new array. Does not change the original string.

```js
> str = "Hey, whats up? Hello"
'Hey, whats up? Hello'

> splitStr = str.split(" ")
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> splitStr
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> str
'Hey, whats up? Hello'
```

`Array.prototype.join()` - joins an array into a string where array elements are joined by the separator. If not separator is specified, array elements are joined by a comma. If an element is undefined or null, it is converted to an empty string. Does not change the original string.

```js
> joinedStr = splitStr.join(" ")
'Hey, whats up? Hello'

> splitStr
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> splitStr.join()
'Hey,,whats,up?,Hello'
```

One side effect of `split()` and `join()` is that they are useful for replacing characters or words in a string. Let's say I wanted to replace the word "Hey" with "Hi" in my string above. Or replace all e's with the letter o.

Try this out:

```js
> str.split("Hey").join(" ")

> str.split("e").join("a")
```
