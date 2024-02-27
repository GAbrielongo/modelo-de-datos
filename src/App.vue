<template>
  <div class="container">
    <list-pokemons/>
  </div>
</template>

<script>
import ListPokemons from './components/ListPokemons.vue'

export default {
  name: 'App',
  components: {
    ListPokemons,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
