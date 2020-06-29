const path = require("path");
const fs = require("fs");
const { writeOutputFile, validateOutputDir } = require("./lib/utils");
const render = require("./lib/htmlRenderer");
const { getTeam } = require("./lib/prompts");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

async function init() {
	try {
		// array
		const team = await getTeam();
		const outputHtml = render(team);
		validateOutputDir(OUTPUT_DIR, outputPath);
		writeOutputFile(outputPath, outputHtml);
	} catch (err) {
		return console.log(err);
	}
}

init();
