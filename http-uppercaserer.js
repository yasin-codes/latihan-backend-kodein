const http = require("http");
const map = require("through2-map");

const server = http.createServer((req, res) => {
  // Set the response header to indicate that we're sending a text file
  if (req.method === "POST") {
    req.pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    ).pipe(res)
  }
});

server.listen(+process.argv[2]);
