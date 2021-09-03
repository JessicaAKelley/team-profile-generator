const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Super is calling Employee.js so it does not have to have this.name/id/school
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;