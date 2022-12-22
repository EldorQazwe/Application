<template>
  <div class="games" style="display: flex; flex-wrap: wrap;justify-content: space-between; margin-top: 30px">
    <div v-for="game in games" :key='game.id' class="test">
      <div class="card" style="">

            <CardImageSlide :avatar='game.thumbnail' :images='game.screenshots'></CardImageSlide>
        <p style='margin: 8px 0px'>{{game.title}} ({{game.genre}})</p>
        <p style='opacity: .7; color: #111; margin-bottom: 10px'>{{game.short_description}}</p>
        <div style="display: flex; position: absolute; bottom: 0px;width: 100%;">
        <LibraryButton
            v-if='!this.store.library.find(i => i.id == game.id)'
            v-on:click='this.store.addGameToLibraryList(game);
            this.toast.success(`Игра ${game.title} добавлена в корзину`)'
        >
            Добавить в избранное
        </LibraryButton>
        <LibraryButton
            v-if='this.store.library.find(i => i.id == game.id)'
            v-on:click='this.store.deleteGamesInLibrary(game.id);
            this.toast.info("Игра удалена из библиотеки")'
        >
            Удалить из избранного
        </LibraryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import CardImageSlide from "./CardImageSlide.vue"
    import LibraryButton from "./UI/LibraryButton.vue"
    import {useGamesStore} from "../stores/store.js";
     import { useToast } from "vue-toastification";
    export default {
    setup() {
        const store = useGamesStore();
        const toast = useToast();
        return {
            store, toast
        }
    },
    components: {
        CardImageSlide, LibraryButton
    },
    props: {
        games: {type: Array}
    },
}
</script>
