<template>
    <container class="flex m-auto justify-center">
        <template v-if="pokemon">
            <div>
                <PokemonCard :pokemon="pokemon" >
                    <Button content="Add to Team" size="sm" @click="addToTeam(pokemon)" />
                </PokemonCard>
            </div>
            <div>
                <StatsCard :stats="pokemon.stats" />
                <Caroussel class="max-w-[500px] flex-wrap" title="Damage">
                    <div v-for="resistance in pokemon.apiResistances" class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
                        
                        <h3>{{ resistance.name }}</h3>
                        <p>Damage Multiplier: {{ resistance.damage_multiplier }}</p>
                        <p>Damage Relation: {{ resistance.damage_relation }}</p>
                        
                    </div>
                </Caroussel>
            </div>
        </template>
        <template v-else>
            <Loader />
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