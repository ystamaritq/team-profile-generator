const path = require("path");
const fs = require("fs");

const handleError = (err) => {
	if (err) console.log("There was an error: " + err);
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

const instructionsMessage = function () {
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

		`
	);
};

module.exports = {
	validateOutputDir: validateOutputDir,
	writeOutputFile: writeOutputFile,
	handleError: handleError,
	instructionsMessage: instructionsMessage,
};
