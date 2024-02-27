<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-4"> 

        <template v-for="pokemon in pokemon" :key="pokemon.num"> 
          <Pokemon :pokemon="pokemon" />

        </template>
      </div>
      
    </div>
    


  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Pokemon from "./Pokemon.vue";

export default {
  components: {
    Pokemon,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getPokemon");
    });
    const pokemon = computed(() => store.state.pokemon);

    return {
      title: store.state.titleApp,
      pokemon,
    };
  },
};
</script>

<style>

</style>