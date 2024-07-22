// Implementation of Currying

function curry(fn) {
  return function rec(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return rec(...args, ...next);
      };
    }
  };
}

// eg

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(10, 20, 30));
console.log(curriedSum(10, 20)(30));
console.log(curriedSum(10)(20, 30));
console.log(curriedSum(10)(20)(30));
