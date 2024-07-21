function f(a, b, c) {
  console.log(a + b + c);
}

function curry(fn) {
  fn();
}

curry(f(10, 20, 30));
