// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
	constructor(name, id, email, gh_username) {
		super(name, id, email);
		this.gh_username = gh_username;
	}

	getGithub() {
		return this.gh_username;
	}

	getRole() {
		return "Engineer";
	}
}
