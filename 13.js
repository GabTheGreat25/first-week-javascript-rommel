//Function declaration

var functionOne = function () {
  // pag var dapat una ito bago mo tawagin
  console.log("functionOne");
};
functionOne();

functionTwo();
//No error
//Prints - functionTwo
function functionTwo() {
  //kahit mauna yung func mo sa pag tawag pag function gamit mo
  console.log("functionTwo");
}

//adds everything dahil sa argument na command an + operator
var sum = function () {
  var i,
    total = 0;
  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

function eventHandler(event) {
  event();
}
eventHandler(function () {
  // I miss typescript basic calling of  function
  //do a lot of event related things
  console.log("Event fired");
});
