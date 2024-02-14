class Person {
    static count = 0;
    constructor() {
        this._firstName = 'Please provide your first name';
        this._lastName = 'Please provide your last name';
        this._age = 0;
        Person.count += 1;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
    display() {
        console.log(`
        =====Person ID: ${this._id}=====
        First name: ${this._firstName}
        Last name: ${this._lastName}
        Age: ${this._age}
        =========================
        `);
    }
}
export {
    Person
}
