const Employee = require("./Employee.js");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return "Manager";
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

const m = new Manager(60);
console.log(m);

module.exports = Manager;
