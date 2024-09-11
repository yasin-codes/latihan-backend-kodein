const fs = require("fs");
const path = require("path");

const myFunction = (dirName, ext, callback) => {
  fs.readdir(dirName, (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(
      null,
      data.filter((name) => {
        return "." + ext === path.extname(name);
      })
    );
  });
};

module.exports = myFunction;
