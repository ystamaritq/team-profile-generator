const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// START - Questions

const employeeQuestions = [
	{
		type: "input",
		message: "Enter employee's name: ",
		name: "name",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "id",
		message: "Enter employee's ID: ",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "email",
		message: "Enter employee's email:",
		validate: validateEmail,
	},
];

const managerQuestions = [
	{
		type: "input",
		message: "Enter the manager's office number:",
		name: "officeNumber",
		validate: validateNonEmpty,
	},
];

const addEmployeeQuestions = [
	{
		type: "confirm",
		name: "addEmployee",
		message: "want to add employee?:",
		default: true,
	},
];

const roleQuestions = [
	{
		type: "list",
		message: "Select the team member's role",
		name: "role",
		choices: ["Engineer", "Intern"],
	},
];

const engineerQuestions = [
	{
		type: "input",
		message: "Enter your github username: ",
		name: "github",
	},
];

const internQuestions = [
	{
		type: "input",
		message: "Enter your school: ",
		name: "school",
	},
];

// END - Questions

// START - Promts

async function getManagerAsync() {
	console.log("Enter Manager's Info");
	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const managerAnswers = await inquirer.prompt(managerQuestions);
	return new Manager(
		employeeAnswers.name,
		employeeAnswers.id,
		employeeAnswers.email,
		managerAnswers.officeNumber
	);
}

async function getEngineerAsync() {
	console.log("Enter Engineer's Info");
	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const engineerAnswers = await inquirer.prompt(engineerQuestions);
	return new Engineer(
		employeeAnswers.name,
		employeeAnswers.id,
		employeeAnswers.email,
		engineerAnswers.github
	);
}

async function getInternAsync() {
	console.log("Enter Interns's Info");
	const employeeAnswers = await inquirer.prompt(employeeQuestions);
	const internAnswers = await inquirer.prompt(internQuestions);
	return new Intern(
		employeeAnswers.name,
		employeeAnswers.id,
		employeeAnswers.email,
		internAnswers.school
	);
}

async function getEmployeeRole() {
	const answers = await inquirer.prompt(roleQuestions);
	return answers.role;
}

async function wantToAddEmployeeAsync() {
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
