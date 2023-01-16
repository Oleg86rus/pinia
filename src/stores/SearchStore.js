import  {defineStore} from 'pinia/dist/pinia'
import { API_KEY } from '../../db'
import { useMovieStore } from './MovieStore'
import { ref } from 'vue'

const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`

// export const useSearchStore = defineStore('searchStore', {
// 	state: () => ({
// 		movies: [],
// 		loader: false
// 	}),
// 	actions: {
// 		async getMovies(search) {
// 			this.loader = true
// 			const res = await fetch(`${url}${search}`, {
// 				method: 'GET',
// 				headers: {
// 					'X-API-KEY': API_KEY,
// 					'Content-Type': 'application/json',
// 				}
// 			}).catch(err => console.log(err))
// 			const data = await res.json()
// 			console.log(data)
// 			this.movies = data.films
// 			this.loader = false
// 		},
// 		addToUserMovies(obj) {
// 			const movieStore = useMovieStore()
// 			movieStore.movies.push({...obj, isWatched: false})
// 			console.log(obj)
// 		}
// 	}
// })

export const useSearchStore = defineStore('searchStore', () => {
	const loader = ref(false)
	const movies = ref([])
	const getMovies = async (search) => {
		loader.value = true
		const res = await fetch(`${url}${search}`, {
			method: 'GET',
			headers: {
				'X-API-KEY': API_KEY,
				'Content-Type': 'application/json',
			}
		}).catch(err => console.log(err))
		const data = await res.json()
		console.log(data)
		movies.value = data.films
		loader.value = false
	}
	const addToUserMovies = (obj) => {
		const movieStore = useMovieStore()
		movieStore.movies.push({...obj, isWatched: false})
		console.log(obj)
	}
	
	return {loader, movies, getMovies, addToUserMovies}
})