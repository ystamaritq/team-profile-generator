const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const colors = require("colors");

// START - Questions

const employeeQuestions = [
	{
		type: "input",
		prefix: "?".cyan.bold,
		message: "Enter employee's name: ",
		name: "name",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		prefix: "?".cyan.bold,
		name: "id",
		message: "Enter employee's ID: ",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		prefix: "?".cyan.bold,
		name: "email",
		message: "Enter employee's email:",
		validate: validateEmail,
	},
];

const managerQuestions = [
	{
		type: "input",
		prefix: "?".cyan.bold,
		message: "Enter the manager's office number:",
		name: "officeNumber",
		validate: validateNonEmpty,
	},
];

const addEmployeeQuestions = [
	{
		type: "confirm",
		prefix: "?".cyan.bold,
		name: "addEmployee",
		message: "Yes | No",
		default: true,
	},
];

const roleQuestions = [
	{
		type: "list",
		prefix: "?".cyan.bold,
		message: "Roles",
		name: "role",
		choices: ["Engineer", "Intern"],
	},
];

const engineerQuestions = [
	{
		type: "input",
		prefix: "?".cyan.bold,
		message: "Enter your github username: ",
		name: "github",
	},
];

const internQuestions = [
	{
		type: "input",
		prefix: "?".cyan.bold,
		message: "Enter your school: ",
		name: "school",
	},
];

// END - Questions

// START - Promts

async function getManagerAsync() {
	console.log(` Enter Manager's Info  \n`.cyan.bold.dim.italic);

	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const managerAnswers = await inquirer.prompt(managerQuestions);
	return new Manager(
		employeeAnswers.name
			.split(" ")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(" "),
		employeeAnswers.id,
		employeeAnswers.email.toLowerCase(),
		managerAnswers.officeNumber
	);
}

async function getEngineerAsync() {
	console.log(` \nEnter Engineer's Info \n`.cyan.bold.dim.italic);
	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const engineerAnswers = await inquirer.prompt(engineerQuestions);
	return new Engineer(
		employeeAnswers.name
			.split(" ")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(" "),
		employeeAnswers.id,
		employeeAnswers.email.toLowerCase(),
		engineerAnswers.github.toLowerCase()
	);
}

async function getInternAsync() {
	console.log(` \nEnter Interns's Info \n`.cyan.bold.dim.italic);
	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const internAnswers = await inquirer.prompt(internQuestions);
	return new Intern(
		employeeAnswers.name
			.split(" ")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(" "),
		employeeAnswers.id,
		employeeAnswers.email.toLowerCase(),
		internAnswers.school
			.split(" ")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(" ")
	);
}

async function getEmployeeRole() {
	console.log(` \nSelect the team member's role  \n`.cyan.bold.dim.italic);
	const answers = await inquirer.prompt(roleQuestions);
	return answers.role;
}

async function wantToAddEmployeeAsync() {
	console.log(` \nDo you want to add an employee?  \n`.cyan.bold.dim.italic);

	const answers = await inquirer.prompt(addEmployeeQuestions);
	return answers.addEmployee;
}

function getTeamMember(role) {
	if (role === "Engineer") {
		return getEngineerAsync();
	} else if (role == "Intern") {
		return getInternAsync();
	} else {
		throw new Error("Invalid role");
	}
}

/**
 * Prompts user for team members.
 * Logic:
 * 1. get the manager
 * 	1.1 add manager to team array
 * 2. ask the user if they want to add team member
 * 3. if yes, ask for team member details
 * 	3.1 ask role
 * 			3.1.1 if engineer, ask engineer questions
 *	 		3.1.2 if intern, ask intern questions
 *			3.1.3 otherwise, throw an error
 * 	3.2 add employee to team array
 * 	3.3 go to 2 and repeat
 * 4. otherwise, stop asking questions
 */
async function getTeam() {
	const team = [];
	const manager = await getManagerAsync();
	team.push(manager);
	var addTeamMember = await wantToAddEmployeeAsync();
	while (addTeamMember) {
		const role = await getEmployeeRole();
		const teamMember = await getTeamMember(role);
		team.push(teamMember);
		addTeamMember = await wantToAddEmployeeAsync();
	}
	return team;
}

// END - Questions

// START - Validations

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

function validateEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return !input || !re.test(input) ? "Invalid email" : true;
}

// END - Validations

module.exports = {
	getTeam: getTeam,
};
