const path = require("path");
const fs = require("fs");
const { blue, green } = require("colors");

const handleError = (err) => {
	if (err) console.log("There was an error: ".red + err);
};

const validateOutputDir = (outputDir) => {
	// validate if output dir exists, otherwise createthis
	fs.exists(outputDir, (exists) => {
		if (!exists) fs.mkdir(outputDir, handleError);
	});
};

const writeOutputFile = (outputPath, data) => {
	fs.writeFile(outputPath, data, handleError);
};

const instructionsMessage = () =>
	console.log(
		`
		******************************************************************************************
		*                                                                                        *
		*                             "Team Profile Generator"                                   *
		*                                                                                        *
		* This utility will walk you through creating an HTML file that displays a team based on *
		* the information provided by the user  "Manager", "Engineer", "Intern"                  *     
		*                                                                                        *
		* Press ^C at any time to quit.                                                          *
		****************************************************************************************** 
		
		`.white.bold
	);

const successMessage = () =>
	console.log(
		`
		
Success! Your HTML markdown file have been generated on: ./team-profile-generator/Develop/output. 
`.cyan.bold
	);

module.exports = {
	validateOutputDir: validateOutputDir,
	writeOutputFile: writeOutputFile,
	handleError: handleError,
	instructionsMessage: instructionsMessage,
	successMessage: successMessage,
};
