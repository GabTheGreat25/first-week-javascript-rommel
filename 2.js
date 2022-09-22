var today = new Date(); // calls the date func so you can use it
console.log(today.getDate()); // get current date
console.log(today.getMonth()); // get current month
console.log(today.getFullYear()); // get current year
console.log(today.getHours()); // get current hours
console.log(today.getMinutes()); // get current minutes
console.log(today.getSeconds()); // get current seconds

//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); // get since jan 1 1970 until now 
console.log(today.getTimezoneOffset()); // get the offset of your timezone

//Calculating elapsed time
var start = Date.now();
// loop for a long time

for (var i=0;i<100000;i++);
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed); 

