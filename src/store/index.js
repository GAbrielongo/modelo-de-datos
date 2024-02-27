import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Pokemon",
    pokemon:[],
  },
  getters: {
  },
  mutations: {
    setPokemon(state, payload){
      state.pokemon = payload;
    },

  },
  actions: {
    async getPokemon({commit}){
      try{
        const response = await fetch("https://raw.githubusercontent.com/robert-z/simple-pokemon-json-api/master/data/pokemon.json")
        const result = await response.json();
        commit("setPokemon", result);
        console.log("Mis Pokemon" );
        console.log(result);
      }catch(error) {
        console.log(error)
      }
    },
    
  },
  modules: {
  }
})
