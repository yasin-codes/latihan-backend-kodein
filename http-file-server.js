const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
  // Set the response header to indicate that we're sending a text file
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Create a read stream for the file
  const fileStream = fs.createReadStream(fileLocation);

  // Pipe the file stream to the response
  fileStream.pipe(res);
});

// Start listening on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
