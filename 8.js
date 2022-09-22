var s = new String("string"); //binaliktad dahil sa !
console.log(!s);
//If the operand is the number 0, true is returned.
var t = 0;
console.log(!t);
//If the operand is any number other than 0, false is returned.
var x = 11;
console.log(!x);
//If operand is null or NaN, true is returned
var y =null;
var z = NaN;
console.log(!y); //true
console.log(!z);
//If operand is undefined, you get true
var foo;
console.log(!foo);