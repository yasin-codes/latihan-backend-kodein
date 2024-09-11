const pathfile = process.argv[2];
if (!pathfile) process.exit(-1);

const fs = require("fs");

fs.readFile(pathfile, (err, result) => {
  if (err) throw err;

  const arrFile = result.toString().split("\n");
  console.log(arrFile.length - 1);
});

// console.log("FINISH");
