// Implement Currying in JS

// Currying => using closures
//Tranforms the fn of multiple args into several fns of single argument

function multiply(a, b) {
  return a * b;
}

const curryJoin = curry(multiply);

curryJoin(10, 20);
