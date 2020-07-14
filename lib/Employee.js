// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || 'Employee';
        this.getName = () => {
            console.log(`This employee's name is: ${this.name}`);
            return this.name;
        };
        this.getId = () => {
            console.log(`This employee's id is: ${this.id}`);
            return this.id;
        };
        this.getEmail = () => {
            console.log(`This employee's id is: ${this.email}`);
            return this.email;
        }
        this.getRole = () => {
            console.log(`This person's role is: ${this.role}.`);
            return this.role;
        }
    };
};

module.exports = Employee;