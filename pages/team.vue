<template>
    <Caroussel title="Your dream team">
        <div v-if="pokemons.length === 0" class="min-h-[30dvh] flex justify-center items-center w-full">
            You have no pokemon in your team
        </div>
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" >
            <Button content="Remove from team" @click="removePokemon(pokemon)" type="danger" size="sm" />
        </PokemonCard>
    </Caroussel>
</template>

<script setup>

const pokemons = useState('pokeTeam', () => []);

const removePokemon = (pokemon) => {
    pokemons.value = pokemons.value.filter(poke => poke.id !== pokemon.id)
    console.log(pokemons.value)
}

</script>