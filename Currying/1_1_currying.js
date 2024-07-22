// problem 1
// evaluate(sum/sub/mul/div)(num1)(num2) return num1 op num2

function evaluate(s) {
  return function (num1) {
    return function (num2) {
      if (s == "sum") {
        return num1 + num2;
      } else if (s == "sub") return num1 - num2;
      else if (s == "mul") return num1 * num2;
      else if (s == "div") return num1 / num2;
      else console.log("Invalid");
    };
  };
}
console.log(evaluate("sum")(10)(20));
console.log(evaluate("sub")(10)(20));
console.log(evaluate("mul")(10)(20));
console.log(evaluate("div")(10)(20));
// console.log(evaluate("sum/.")(10)(20));

// example 2
// infinfite currying
// important
function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
console.log(sum(10)(20)(20)());

// In currying the number of functions depended on the number of args

// Partial application is transformation of fn to another funtion with different(small) arity(args)
// exmple of partial application
function f(a) {
  return function (b, c) {
    console.log(a, b, c);
  };
}

f(10)(20, 30);
