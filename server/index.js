const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: { origin: true },
});
const {lobby} = require("./lobby");

io.on("connection", function (socket) {
  console.log("A user connected: " + socket.id);

  const sendMessage = (text, room, userName) => {
    console.log(room);
    let newText = "<" + userName + "> " + text;
    io.to(room).emit("receive", newText);
  };

  const createRoom = () => {
    let id = socket.id;
    io.to(id).emit("receive", "room ID: " + socket.id);
  };

  const joinRoom = (room, userName) => {
    console.log(room);
    socket.join(room);
    socket.to(room).emit("userJoined", userName);
  }

  socket.on("send", sendMessage);
  socket.on("createRoom", createRoom);
  socket.on("joinRoom", joinRoom)

  socket.on("disconnect", function () {
    console.log("A user disconnected: " + socket.id);
  });
});

http.listen(3000, function () {
  console.log("Server started!");
});
