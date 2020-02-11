class Person {
    constructor(firstName, lastName, dob) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dob = dob;
        //this._age = age(dob);
    }
    get returnAll() {
        return this._firstName, this._lastName, this._dob //, this._age
    }

}
module.exports = Person;