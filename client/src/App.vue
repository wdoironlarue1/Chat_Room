<template>
  <div id="app">
    <!-- <Lobby /> -->
    <EntryPage v-if="!roomCreated" />
    <Lobby v-else/>
  </div>
</template>

<script>
import Lobby from "./components/Lobby.vue";
import EntryPage from "./components/EntryPage.vue";
import io from 'socket.io-client';
let socket = io('http://localhost:3000');

export default {
  name: "App",
  data: () => {
    return {
      roomCreated: false
    }
  },
  methods: {
    createRoom: function(event) {
      event.preventDefault();
      socket.emit("createRoom");
      this.roomCreated = true;
    }
  },
  components: {
    Lobby,
    EntryPage
  },
};
</script>

<style>
#app {
  font-family: "Trebuchet MS";
  text-align: left;
  background-color: black;
  color: cyan;
  display: flex;
}
#game {
  width: 49vw;
  height: 100vw;
}
#input {
  width: 49vw;
  height: 100vw;
}
#border {
  border-right: 2px solid cyan;
}
@media (max-width: 1000px) {
  #app {
    flex-direction: column;
  }
  #game {
    width: 100vw;
    height: 50vw;
  }
  #input {
    width: 100vw;
    height: 50vw;
  }
}
</style>
