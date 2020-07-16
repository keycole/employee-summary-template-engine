// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        this.getName = () => {
            return this.name;
        };
        this.getId = () => {
            return this.id;
        };
        this.getEmail = () => {
            return this.email;
        }
        this.getRole = () => {
            return this.role;
        }
    };
};

module.exports = Employee;