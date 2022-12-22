<template>
  <span v-if="this.store.games.length == 0">ничего нет</span>
  <div v-else>
    <div class="navbar">
      <div style="display: flex;">
        <SelectOptions v-model="genreSelectValue" :options="genreSortsOptions" title="Жанр"></SelectOptions>
        <SelectOptions v-model="platformSelectValue" :options="platformSortsOptions" title='Платформа'></SelectOptions>
      </div>
    </div>

    <CardsGenerate
      :games='filterGame.slice(this.page * this.pagesCountMax - this.pagesCountMax, this.page * this.pagesCountMax)'
    />
  </div>

  <ul
    v-if="this.store.games.length"
    style="list-style: none; display: flex; padding: 0px"
    class="navbar"
    >
    <li
      v-for="index in Math.round(this.store.games.length / this.pagesCountMax)"
      :key='index' style="cursor: pointer;width: 100%;">
      <RouterLink :to="{name: 'shop_game', query: {pageId: index}}" style='width: 100%'>{{index}}</RouterLink>
    </li>
  </ul>
</template>

<script>
import {useGamesStore} from "../stores/store.js";
import SelectOptions from "../components/UI/SelectOptions.vue"
import CardsGenerate from "../components/CardsGenerate.vue"

export default {
  setup() {
    const store = useGamesStore();
    return {
      store
    }
  },
  name: 'ShopStore',
  components: {
    SelectOptions, CardsGenerate
  },
  data() {
    return {
      page: 1,
      pagesCountMax: 20,
      genreSelectValue: "",
      genreSortsOptions: [
        {value: "shooter", name: "shooter"},
        {value: "mmoarpg", name: "mmoarpg"},
        {value: "arpg", name: "arpg"},
        {value: "strategy", name: "strategy"},
        {value: "mmorpg", name: "mmorpg"},
        {value: "fighting", name: "fighting"},
        {value: "action", name: "action"},
        {value: "rpg", name: "rpg"},
      ],
      platformSelectValue: "",
      platformSortsOptions: [
        {value: 'Windows', name: "Комп"},
        {value: 'Web Browser', name: "браузер"},
        {value: 'PC (Windows), Web Browser', name: "в обоих"},
      ]
    }
  },
  methods: {
  },
  computed: {
    filterGame() {
      let games = this.store.games

      if (this.genreSelectValue) {
        games = games.filter(game => game.genre == this.genreSelectValue)
      }
      if (this.platformSelectValue) {
        games = games.filter(game => game.platform == this.platformSelectValue)
      }
      return games
    },
  },
  watch: {
      async "$route.query.pageId"() {
        this.page = this.$route.query.pageId || 1;
      },
    },
}
</script>

<style>

.card {
  margin-bottom: 30px; text-align: left;width: 365px; height: 400px; position: relative;
}
.test:hover a {
  color: #111
}
.test {
  position: relative
}
img {
  border-radius: 10px 10px 0px 0px
}
.button img {
  width: 40px
}
.button {
  border: 5px solid #42b983;
  justify-content: center;
  position: absolute;
  border: none;
  background-color: #fff;
  display: flex;
  width: 80px;
  height: 80px;
  align-items: center;
  border-radius: 100px;
  top: -15px;
  left: -15px;
}

.btn {
  display: flex;
  bottom: 0;
  cursor: pointer;
  width: 100%;
  background-color: #42b983; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
