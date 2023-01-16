import  {defineStore} from 'pinia/dist/pinia'

const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`

export const useSearchStore = defineStore('searchStore', {
	state: () => ({
		movies: [],
		loader: false
	}),
	actions: {
		async getMovies(search) {
			this.loader = true
			const res = await fetch(`${url}${search}`, {
				method: 'GET',
				headers: {
					'X-API-KEY': 'a8347843-59bb-4382-b376-41469f432554',
					'Content-Type': 'application/json',
				}
			}).catch(err => console.log(err))
			const data = await res.json()
			console.log(data)
			this.movies = data.films
			this.loader = false
		}
	}
})