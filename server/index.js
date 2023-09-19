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
  socket.on("message", (msg) => {
    console.log(msg);
    io.emit("message", $`{socket.id.substr(0, 2)} said ${msg}`);
  });

  // Listening for event from client
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Listening on port 3000
http.listen(3000, () => {
  console.log("Listening on port 3000");
});
