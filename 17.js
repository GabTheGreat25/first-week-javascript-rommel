//using map
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];
persons.map((person) => console.log(person.firstname)); //gets all the first name

var newPersons = persons.map((person) => {
  console.log(person); //gets
  return [person.firstname, person.lastname].join(" ");
});

console.log(newPersons); //gets all the name and add a space to it because of the return function
