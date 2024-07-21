// Call Apply Bind in JS
// Call is a predefined JavaScript method.
// Call = It can be used to invoke (call) a method with an owner object as an argument (parameter).
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// first Parameter is self (this)
// second, third,... =>

const obj1 = {
  fName: "Aakash",
  lName: "Maroju",
};

const obj2 = {
  fName: "Ravi",
  lName: "Teja",
};

const PrintName = function (city, country) {
  console.log(
    this.fName + " . " + this.lName + " belong to " + city + ", " + country
  );
};
// The first Parameter is this Object
PrintName.call(obj1, "Telangana", "India");

PrintName.apply(obj1, ["Telangana", "India"]);
// Apply the parameters are passed as a single array

// Bind - similar to call but returns a fn
// make a copy for that object by binding them

const PrintName1 = PrintName.bind(obj1, "Telangana", "India");
// Can be used later when used

// ..............100 lines of code

PrintName1();
