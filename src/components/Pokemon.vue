<template>
<div class="row">
  <div class="col-4">
      <h1>{{pokemon.num}} </h1>
      <h2>{{pokemon.name}} </h2>
      <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.num + '.png'"/>

  </div>

</div>
  
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
  setup(props){
    console.log("props pokemon.vue")
    console.log(props.pokemon.variations[0].description);
  }
  
};
</script>


<style scoped>
.pokemon{
    height: 300px;
    display:flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black
}

.pokemon img{
    max-height: 200px;
    max-width: 250px;
}


</style>