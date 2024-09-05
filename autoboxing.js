// autoboxing is implicit conversion of primitive
// data type to a warpper object in order to accomodate the properties and methods in it

let s = "Hello";
console.log(typeof s);
s.foo = "Hahahaha0";
console.log(s.foo); // prints undefined coz at that moment only it stays
// primitive data type is wrapped by wrapper object => String Object and serving the purpose
console.log(s.includes("o"));
console.log(typeof s);

// String ---> wrapper object for sometime ---> getback to String
// autoboxing
// make it wrapper

let s1 = new String("Hello");
// explicity making it a wrapper object
console.log(typeof s1);
s1.foo = "Hahahaha";

console.log(s1.foo);
