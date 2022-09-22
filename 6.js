// Part 2
console.log (0 && "Foo"); //First operand is falsy - return it
console.log ("Foo" && "Bar"); //First operand is truthy, return the second operand
console.log (0 || "Foo"); //First operand is falsy - return second operand
console.log ("Foo" || "Bar"); //First operand is truthy, return it
console.log (0 || false); //First operand is falsy, return second operand