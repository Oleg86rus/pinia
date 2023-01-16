<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="Input value" v-model="searchMovie" />
  </form>
  <Loader v-if="searchStore.loader"/>
<!--  <div v-else>-->
    <Movie v-for="movie of searchStore.movies" :key="movie.filmId" :movie="movie" :is-search="true"/>
<!--  </div>-->
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import Movie from '../components/Movie.vue'
import Loader from './Loader.vue'

const searchMovie = ref('')
const searchStore = useSearchStore()
</script>

<style lang="css" scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-right: 10px;
}
</style>