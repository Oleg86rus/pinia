import { defineStore } from 'pinia/dist/pinia'

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [
		],
		activeTab: 2
	}),
	getters: {
		watchedMovies() {
			return this.movies.filter(el => el.isWatched)
		},
		totalCountMovies() {
			return this.movies.length
		}
	},
	actions: {
		setActiveTab(id) {
			this.activeTab = id
		},
		toggleWatched(id) {
			const idx = this.movies.findIndex(el => el.filmId === id)
			this.movies[idx].isWatched = !this.movies[idx].isWatched
		},
		removeMovie(id) {
			this.movies = this.movies.filter(el => el.filmId !== id)
		}
	}
})