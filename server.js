const server = require("express")();
var cors = require("cors");
server.use(cors());
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: { origin: true }, 
});

io.on("connection", function (socket) {
  console.log("A user connected: " + socket.id);

  socket.on("send", function (text) {
    let newText = "<" + socket.id + "> " + text;
    if (text === "struct card") {
      io.emit("struct create", 130, 180);
    }
    if (text === "struct token") {
      io.emit("struct create", 100, 100);
    }
    io.emit("receive", newText);
  });

  socket.on("createRoom", function(room) {
    console.log(room)
    socket.join(room);
  })

  socket.on("joinRoom", function(room) {
    console.log(room)
    socket.join(room);
    io.to(room).emit("userJoined", socket.id)
  })

  socket.on("disconnect", function () {
    console.log("A user disconnected: " + socket.id);
  });
});

http.listen(3000, function () {
  console.log("Server started!");
});
