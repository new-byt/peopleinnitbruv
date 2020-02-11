from person import Person
from people import People

people = People()

personOne = Person("Ashley", "Doel", "16")
personTwo = Person("Ashleigh", "Doll", "16")

people.addPerson(personOne)
people.addPerson(personTwo)
people.printPeople()
