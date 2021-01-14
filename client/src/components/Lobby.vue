<template>
  <div id="app">
    <div id="game">
      <Game />
    </div>
    <div id="border" />
    <div id="input">
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from "./Chat.vue";
import Game from "./Game.vue";

export default {
  name: "Lobby",
  components: {
    Chat,
    Game,
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
