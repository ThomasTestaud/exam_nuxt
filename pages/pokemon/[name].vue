<template>
    <container class="flex w-10/12 m-auto justify-center">
        <PokemonCard :pokemon="pokemon" v-if="pokemon">
            <Button content="Add to Team" size="sm" @click="addToTeam(pokemon)" />
        </PokemonCard>
        <template v-else>
            <p>Loading...</p>
        </template>
    </container>
</template>

<script setup>
import { onMounted } from 'vue';


const route = useRoute()
const name = route.params.name
const pokemon = ref(null)

const fetchPokemon = async () => {
    const response = await $fetch('https://pokebuildapi.fr/api/v1/pokemon/' + name)
    pokemon.value = response
    console.log(response)
}

const pokeTeam = useState('pokeTeam', () => []);

const addToTeam = (pokemon) => {
    if (pokeTeam.value.length >= 6) {
        alert('You can only have 6 pokemons in your team')
        return
    }
    pokeTeam.value.push(pokemon);
}


onMounted(() => {
    fetchPokemon()
})

</script>