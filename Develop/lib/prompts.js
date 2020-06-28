const inquirer = require("inquirer");

const managerQuestions = [
	{
		type: "input",
		message: "Enter manager's name: ",
		name: "name",
		validate: validateNonEmpty,
	},
	{
		type: "number",
		name: "id",
		message: "Enter manager's ID: ",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "email",
		message: "Enter manager's email:",
		validate: validateEmail,
	},
	{
		type: "number",
		message: "Enter the manager's office number:",
		name: "officeNumber",
	},
];

const teamMembersQuestions = [
	{
		type: "input",
		message: "Enter the team member's name: ",
		name: "name",
		validate: validateNonEmpty,
	},
	{
		type: "number",
		name: "id",
		message: "Enter team member's ID: ",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "email",
		message: "Enter team member's email:",
		validate: validateEmail,
	},
	{
		type: "list",
		message: "Select the team member's role",
		name: "role",
		choices: ["Engineer", "Intern"],
		when: (role) => {
			return displayNext;
		},
	},
];

const promptEngineer = {
	type: "input",
	message: "Enter your github username: ",
	name: "isEngineer",
};

const promptIntern = {
	type: "input",
	message: "Enter your school: ",
	name: "isIntern",
};

function displayNext(role) {
	if (role === "Engineer") {
		return promptEngineerAsync();
	} else {
		return promptInternAsync();
	}
}

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

function validateEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return !input || !re.test(input) ? "Invalid email" : true;
}

function promptManagerAsync() {
	return inquirer.prompt(managerQuestions);
}

function promptTeamMembersAsync() {
	return inquirer.prompt(teamMembersQuestions);
}

function promptEngineerAsync() {
	return inquirer.prompt(promptEngineer);
}

function promptInternAsync() {
	return inquirer.prompt(promptIntern);
}

module.exports = {
	promptManagerAsync: promptManagerAsync,
	promptTeamMembersAsync: promptTeamMembersAsync,
	promptEngineerAsync: promptEngineerAsync,
	promptInternAsync: promptInternAsync,
	displayNext: displayNext,
};
