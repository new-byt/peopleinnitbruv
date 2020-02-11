class Person:
    def __init__(self, firstName, lastName, dob):
        self._firstName = firstName
        self._lastName = lastName
        self._dob = dob

    def __str__(self):
        print(self._firstName, " ", self._lastName)
