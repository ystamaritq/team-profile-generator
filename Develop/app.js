const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const { getTeam } = require("./lib/prompts");
const {
	writeOutputFile,
	validateOutputDir,
	instructionsMessage,
	successMessage,
} = require("./lib/utils");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

async function init() {
	try {
		//instructions
		instructionsMessage();
		//return array
		const team = await getTeam();
		//render array
		const outputHtml = render(team);
		//validate the path
		validateOutputDir(OUTPUT_DIR, outputPath);
		//write the file
		writeOutputFile(outputPath, outputHtml);
		//success message
		successMessage();
	} catch (err) {
		return console.log(err);
	}
}

init();
