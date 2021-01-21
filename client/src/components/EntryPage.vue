<template>
  <div id="entryPage">
    <div v-if="!roomCreated">
      <div>
        <input
          type="text"
          v-model="userName"
          placeholder="enter user name here"
        />
      </div>
      <input type="submit" value="create room" v-on:click="createRoom" />

      <input type="submit" value="join room" v-on:click="joinRoom" />
      <input type="text" v-model="roomToJoin" :placeholder="roomToJoin" />
    </div>
    <div v-else>
      room created
    </div>
  </div>
</template>

<script>
// import io from "socket.io-client";
// let socket = io("http://localhost:3000");

export default {
  name: "EntryPage",
  data: () => {
    return {
      roomToCreate: "",
      roomToJoin: "",
      roomCreated: false,
      userName: "",
    };
  },
  methods: {
    createRoom: function(event) {
      event.preventDefault();
      this.socket.emit("createRoom");
      this.roomIsCreated(this.socket.id, this.userName);
      this.roomCreated = true;
    },
    joinRoom: function(event) {
      event.preventDefault();
      this.roomIsCreated(this.roomToJoin, this.userName);

      this.socket.emit("joinRoom", this.roomToJoin, this.userName);
    },
  },
  props: {
    roomIsCreated: Function,
    socket: Object,
  },
  // created: function() {
  //   socket.on("userJoined", (user) => {
  //     console.log("user joined " + user);
  //   });
  // },
};
</script>

<style scoped>
#entryPage {
  width: 100vw;
  height: 100vw;
  text-align: center;
}
</style>
