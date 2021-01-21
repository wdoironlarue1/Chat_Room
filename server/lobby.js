class lobby {
  constructor(socket, io) {
    this.socket = socket;
    this.id = socket.id;
    this.io = io;

    console.log("A user connected");

    this.socket.on("send", this.sendMessage);
    this.socket.on("createRoom", this.createRoom);
  }

  sendMessage = (text) => {
    console.log(this.id);
    let newText = "<" + this.socket.id + "> " + text;
    this.io.to(this.id).emit("receive", newText);
    console.log(global.gameStates);
  };

  createRoom = () => {
    console.log(this.socket.id);
    let id = this.socket.id;
    global.gameStates[id] = { users: 1 };
    this.io.to(id).emit("receive", this.socket.id);
  };
}

module.exports = { lobby };
