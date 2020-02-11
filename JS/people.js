class People {
    constructor() {
        this._peopleInnitBruv = [];
    }
    get printPeople() {
        return this._peopleInnitBruv
    }
    addPerson(person) {
        this._peopleInnitBruv.push(person);
    }

}
module.exports = People;