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

const teamMembersQuestions = [{}];

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
module.exports = {
	promptManagerAsync: promptManagerAsync,
	promptTeamMembersAsync: promptTeamMembersAsync,
};
