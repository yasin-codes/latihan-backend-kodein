const pathFile = process.argv[2];

if (!pathFile) process.exit("-1");

const fs = require("fs");
const { exit } = require("process");

const objBufferedFile = fs.readFileSync(pathFile);

// console.log("objBufferedFile.toString()");
// console.log(objBufferedFile.toString().split("\n"));

const arrFile = objBufferedFile.toString().split("\n");
console.log(arrFile.length - 1);
