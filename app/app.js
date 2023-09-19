const socket = io("ws://localhost:8080");

socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerText = text;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  console.log(text);
  socket.emit("message", text);
  document.querySelector("input").value = "";
};

// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }
