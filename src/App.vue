<template>
  <nav class="navbar">
    <router-link to="/">Магазин</router-link>
    <router-link to="/library">Библиотека ({{this.store.library.length}})</router-link>
  </nav>

  <router-view/>

</template>

<script>
import {useGamesStore} from "./stores/store.js";
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const store = useGamesStore();
    return {
      store
    }
  },
  components: {
    RouterLink
  },
  async mounted() {
    fetch("http://eldorqazwe.ru/game.getAllGames?access_token=1").then((req) => {
      req.json().then((res) => {
        this.store.addGameList(res.game)
      })
    })
  },
}

</script>

<style>
html, body {
  margin: 0; padding: 0;
}
.navbar {
  overflow: hidden;
  background-color: #333;
  top: 0;
  padding: 20px 10px;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

}

.navbar a:hover {
  background: #42b983;
  color: white;
}

.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px; /* Used in this example to enable scrolling */
}

p {
  margin: 0px; padding: 0
}
a {
  text-decoration: none;
  color: green
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1920px;
  margin: 0 auto;
}

nav {
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
