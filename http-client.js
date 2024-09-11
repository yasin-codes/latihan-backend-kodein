"use strict";
const http = require("http");

http.get(process.argv[2], (Response) => {
  Response.setEncoding("utf8");
  Response.on("data", (data) => {
    console.log(data);
  });
});
