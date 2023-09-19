// Creating HTTP server

const http = require("http").createServer();

// Creating Socket.io server
// Cross-origin disabled for security reasons
// Any url can connect to the server
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected");

  // Emitting event to client
  socket.emit("welcome", "Welcome to the server");

  // Listening for event from client
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

// Listening on port 8080
http.listen(8080, () => {
  console.log("Listening on port 8080");
});

// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => {

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });
