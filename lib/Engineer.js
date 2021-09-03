const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Super is calling Employee.js so it does not have to have this.name/id/school
        super(name, id, email);
        // getGithub();
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;