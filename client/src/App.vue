<template>
  <div id="app">
    <!-- <Lobby /> -->
    <EntryPage
      :socket="socket"
      :roomIsCreated="roomIsCreated"
      v-if="!isConnectedToRoom"
    />
    <Lobby :socket="socket" :lobbyId="lobbyId" :userName="userName" v-else />
  </div>
</template>

<script>
import Lobby from "./components/Lobby.vue";
import EntryPage from "./components/EntryPage.vue";
import io from "socket.io-client";
// let socket = io("http://localhost:3000");

export default {
  name: "App",
  data: () => {
    return {
      isConnectedToRoom: false,
      lobbyId: "",
      userName: ""
    };
  },
  methods: {
    roomIsCreated: function(lobbyId, userName) {
      this.isConnectedToRoom = true;
      this.lobbyId = lobbyId;
      this.userName = userName;
    },
  },
  props: {
    socket: {
      type: Object,
      default: function() {
        return io("http://localhost:3000");
      },
    },
  },
  components: {
    Lobby,
    EntryPage,
  },
};
</script>

<style>
#app {
  font-family: "Trebuchet MS";
  text-align: left;
  background-color: rgb(42, 145, 177);
  /* color: cyan; */
  display: flex;
}
#game {
  width: 50vw;
  height: 100vw;
}
#input {
  width: 50vw;
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
