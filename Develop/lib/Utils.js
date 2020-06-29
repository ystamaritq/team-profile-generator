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

module.exports = {
	validateOutputDir: validateOutputDir,
	writeOutputFile: writeOutputFile,
	handleError: handleError,
};
