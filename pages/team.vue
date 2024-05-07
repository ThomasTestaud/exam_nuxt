<template>
    list pokemon (6 max)
    <div class="flex overflow-x-auto w-full">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
</template>

<script setup>

const pokemons = useState('pokeTeam', () => []);


</script>