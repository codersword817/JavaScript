// Immediately Invoked Function Expression
// used in Legacy code
// usecases: when let, const werent used this helps in global naming conflicts
// Module Pattern (but we have import/export)

(function greet(name) {
  console.log(`Good Morning ${name}`);
})("Aakash");

// greet() doesnt exist it is immediately called

const value = (function (color) {
  return `The Sun is ${color}`;
})("orange-red");

console.log(value);
