function f() {
  var x = 20;
  console.log(x);
}

// console.log(x);
// var is Function Scoped

// in module mode => script scope
// in script mode (in general) => Global scope

console.log(y); // var -> declaration hoisting

var y = 200;

console.log(y);

// how this works
/*
  var y;
  console.log(y);
  y = 200;
  console.log(y);
*/

// NOTE:
// let, const are also hoisted but they enter into temporal dead zone

// var can be declared unlike let, const
var r = 10;
var r = 30;
var r;

console.log(r);

/*
var r;
r = 10;
r = 20;
// ignored 
console.log(r)
*/
