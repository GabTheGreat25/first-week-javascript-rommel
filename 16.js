// var colors = ["red", "green", "blue"]; //old
// colors.forEach(function (color) {
//   console.log(color);
// });

var colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));

var myArray = new Array("Red", "Blue", "Yellow"); // add ~ after the next number
var list = myArray.join(" ~ ");
console.log(list);

var myArray = new Array("1", "2", "3");
var last = myArray.pop();
console.log(last); //pop the last number

var myArray = new Array("1", "2");
myArray.push("3"); //add 3 in the last string of array
console.log(myArray);
