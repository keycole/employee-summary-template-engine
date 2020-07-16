// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = 'Engineer';
        this.github = github;
        this.getGithub = () => {
            return this.github;
        };
        this.getRole = () => {
            return this.role;
        }
    }
};

module.exports = Engineer;