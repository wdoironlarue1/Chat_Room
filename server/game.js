let socket;
let io;
let gameId;

class game {
  constructor(socket) {
    this.id = socket.id;
    this.socket = socket;
  }

  initGame = () => {
    console.log(global.gameStates)
    console.log("A user connected");

    this.socket.on("send", this.sendMessage);
    this.socket.on("createRoom", this.createRoom);
  };

  createRoom = () => {
    console.log(socket.id);
    id = socket.id;
    io.to(id).emit("receive", socket.id);
    // socket.join(socket.id);
  };

  sendMessage = (text) => {
    console.log(id);
    let newText = "<" + socket.id + "> " + text;
    io.to(id).emit("receive", newText);
    console.log(socket.rooms);
  };
}

module.exports = {game};

// exports.initGame = function (id, gameSocket, sio) {
//   socket = gameSocket;
//   io = sio;

//   console.log("A user connected: " + socket.id);

//   socket.on("send", sendMessage);
//   socket.on("createRoom", createRoom);
// };

// sendMessage = (text) => {
//   console.log(id);
//   let newText = "<" + socket.id + "> " + text;
//   if (text === "struct card") {
//     io.emit("struct create", 130, 180);
//   }
//   if (text === "struct token") {
//     io.emit("struct create", 100, 100);
//   }
//   io.to(id).emit("receive", newText);
//   console.log(socket.rooms);
// };

// createRoom = () => {
//   console.log(socket.id);
//   id = socket.id;
//   io.to(id).emit("receive", socket.id);
//   // socket.join(socket.id);
// };
