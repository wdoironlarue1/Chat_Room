<template>
  <div>
    <div v-if="!roomCreated">
      <!-- <button v-on:click="createRoom">
      create room
    </button>
    <button v-on:click="joinRoom">
      join room
    </button> -->

      <!-- <input type="text" v-model="roomToCreate" :placeholder="roomToCreate" /> -->
      <input type="submit" value="create room" v-on:click="createRoom" />

      <!-- <input type="text" v-model="roomToJoin" :placeholder="roomToJoin" /> -->
      <input type="submit" value="join room" v-on:click="joinRoom" disabled />
    </div>
    <div v-else>
room created
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
let socket = io("http://localhost:3000");

export default {
  name: "EntryPage",
  data: () => {
    return {
      roomToCreate: "",
      roomToJoin: "",
      roomCreated: false,
    };
  },
  methods: {
    createRoom: function(event) {
      event.preventDefault();
      console.log("howday");
      socket.emit("createRoom");
      this.roomCreated = true;
    },
    joinRoom: function(event) {
      event.preventDefault();
      console.log(this.roomToJoin);
      socket.emit("joinRoom", this.roomToJoin);
    },
  },
  props: {
      createRoom: function
  },
  created: function() {
    socket.on("userJoined", (user) => {
      console.log("user joined " + user);
    });
  },
};
</script>

<style scoped>
</style>
