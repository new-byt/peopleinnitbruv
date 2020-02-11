class People:
    def __init__(self):
        self.peoplesinnitgangbruv = []

    def addPerson(self, person):
        self.peoplesinnitgangbruv.append(
            [person._firstName, person._lastName])

    def printPeople(self):
        print(self.peoplesinnitgangbruv)
