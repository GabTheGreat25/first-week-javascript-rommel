console.log(true && true); // true AND true returns true
 console.log(true && false);// true AND false returns false
 console.log(false && true);// false AND true returns false
 console.log("Foo" && "Bar");// Foo(true) AND Bar(true) returns Bar
console.log(false && "Foo"); // false && Foo(true) returns false
console.log("Foo" && false); // Foo(true) && false returns false
console.log(false && (1 == 2)); // false && false(1==2) returns
