const People = require("./people");
const Person = require("./person");

people = new People();

var personOne = new Person("Ashley", "Doel", "28/08/2003");
var personTwo = new Person("Ashleigh", "Doll", "28/08/2003");


people.addPerson(personOne);
people.addPerson(personTwo);
console.log(people);