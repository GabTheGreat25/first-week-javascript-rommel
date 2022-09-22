// var validateDataForAge = function (data) { //old
//   console.log(data);
//   person = data();
//   console.log(person);
//   if (person.age < 1 || person.age > 99) {
//     return true;
//   } else {
//     return false;
//   }
// };

var validateDataForAge = (data) => {
  console.log(data);
  person = data();
  console.log(person);
  if (person.age < 1 || person.age > 99) {
    return true;
  } else {
    return false;
  }
};

// var errorHandlerForAge = function (error) { //old
//   if (error) console.log(error);
//   else console.log("Error while processing age");
// };

var errorHandlerForAge = (error) => {
  if (error) console.log(error);
  else console.log("Error while processing age");
};

// function parseRequest(data, validateData, errorHandler) { //old
//   var error = validateData(data);
// }

// function parseRequest(data, validateData, errorHandler) { //old 2.0
//   var error = validateData(data);
//   if (!error) {
//     console.log("no errors");
//   } else {
//     var message = "error age";
//     errorHandler(message);
//   }
// }

var parseRequest = (data, validateData, errorHandler) => {
  var error = validateData(data);
  if (!error) {
    console.log("no errors");
  } else {
    var message = "error age";
    errorHandler(message);
    errorHandler();
  }
};

// var generateDataForScientist = function () { //old
//   return {
//     name: "Albert Einstein",
//     // age : Math.floor(Math.random() * (100 - 1)) + 1,
//     age: 102,
//   };
// };

var generateDataForScientist = () => ({
  name: "Albert Einstein",
  // age : Math.floor(Math.random() * (100 - 1)) + 1,
  age: 102,
});

// var generateDataForComposer = function () { //old
//   return {
//     name: "J S Bach",
//     age: Math.floor(Math.random() * (100 - 1)) + 1,
//   };
// };

var generateDataForComposer = () => ({
  name: "J S Bach",
  age: Math.floor(Math.random() * (100 - 1)) + 1,
});

parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);

// var errorHandlerForAge = function (error) { //old
//   console.log(error);
//   // if (error)
//   //     console.log(error);
//   // else
//   //     console.log("Error while processing age");
//   error = error || "error while processing age";
//   console.log(error);
// };

var errorHandlerForAge = (error) => {
  console.log(error);
  error = error || "error while processing age";
  console.log(error);
};
