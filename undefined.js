// Difference betweem undefined and not defined

console.log(x);

// results in error because x is not defined

console.log(y);
var y; // this results in
// hoisting in js => places a placeholder named undefined to y until it gets initialised/ assigned
y = 10;
console.log(y);

y = undefined; /*  Striclty not a good practice  */
console.log(y);
