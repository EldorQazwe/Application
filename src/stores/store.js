import { defineStore } from 'pinia'

export const useGamesStore = defineStore({
  id: 'games',
  state: () => ({
    games: [],
    library: [],
  }),

  getters: {
  },
  actions: {
    addGameList (game) {
      this.games = game
    },
    addGameToLibraryList (game) {
      if (!this.library.find(item => item.id == game.id))
      this.library.push(game)
    },
    deleteGamesInLibrary(id) {
      this.library = this.library.filter(item=> item.id != id)
      console.log(this.library.length)

    }
    // push_favorites (films) {
    //     this.favorites.push(films)
    // },
    // in_favorites (kinopoiskId) {
    //     return Boolean(this.favorites.find(item => item.kinopoiskId == kinopoiskId))
    // },
    // remove_film_in_favorites (kinopoiskId) {
    //     this.favorites = this.favorites.filter(item => item.kinopoiskId != kinopoiskId)
    // }
  }
})
