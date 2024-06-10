const childProcess = require("child_process");
const { argv } = require("process");

const PROJECTS = [
  "app1",
  "app2",
  "commons",
  "commons2",
  "lib1"
];

const where = argv[2];
const version = argv[3];

if (!where || !version) {
  console.warn(`WHERE and VERSION must both be defined`);
  process.exit(1);
}

for (const project of PROJECTS) {
  childProcess.execSync(`git tag -f ${project}@${version} ${where}`);
}