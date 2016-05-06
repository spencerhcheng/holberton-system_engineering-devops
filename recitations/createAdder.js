function createAdder (num) {
  return function (n) {
    return n + num;
  }
}

var foo = createAdder(10);
console.log(foo(1));
