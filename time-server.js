const net = require("net");
const port = process.argv[2];

const server = net.createServer((socket) => {
  const date = new Date();

  const year = date.getFullYear();
  // Add leading zeros if necessary
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`);
});

server.listen(port);
