const childProcess = require("child_process");

childProcess.execSync("git tag -d $(git tag --list)");