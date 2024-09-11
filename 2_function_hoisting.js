// In Var => declarative hoisting
// In functions => Value Hoisting

/* equivalent to 
function sum(a, b) {
  console.log(a + b);
}
*/
/*
sum(10, 20);

function sum(a, b) {
  console.log(a + b);
}
*/
/*
var sum = (a, b) => {
  // Doesnot works but var also donot works but error would be not as Expected :)
  // for const the error is => no hoisting TDZ
  // for var error => sum is not a function bcoz declaration nature goes top as var sum; then sum();
  console.log(a + b);
};
*/

// Behaviour of functions, var
// Example

function sum(a, b) {
  console.log(a + b);
}

var sum = 200;

function sum() {
  console.log("I am Zero");
}

var sum = 230;

console.log(sum);

/*
var declaration overrides the other hoisting 
it works like:

function sum(a, b) {
  console.log(a + b);
}

function sum() {
  console.log("I am Zero");
}
var sum;
sum = 200;
sum = 230;
console.log(sum);
*/

greet("John");

var greet = (name) => {
  console.log("Good Morning", name);
};

function greet(name) {
  console.log("Namasthe Bhaii ");
}

greet("John");

// expected output is :
/*
function greet(name) {
  console.log("Namasthe Bhaii ");
}
var greet; // greet is redeclared so ignore 
greet("John");  // first time Namasthe Bhai 
greet  = function(){GM}
greet("John") // GM John
*/
