<template>
    <div class="flex justify-center">
        <input type="text" v-model="searchInput"  class="border border-primary-500 rounded-full" @input="filterPokemonsByName" placeholder="Search Pokemon">   
    </div>

    <h2 class="text-2xl font-bold text-left ml-6">Types:</h2>
    <div class="flex overflow-x-auto w-full" v-if="!typePending">
        <button v-for="type in types" :key="type.id" @click="toggleType(type)" :class="selectedType == type ? 'border border-primary-500' : ''">
            <TypeCard :type />
        </button>
    </div>
    <template v-else>
        <p>Loading...</p>
    </template>

    <h2 class="text-2xl font-bold text-left ml-6" >Pokemons:</h2>
    <div class="flex overflow-x-auto w-full" v-if="!pokePending">
        <PokemonCard v-for="pokemon in displayedPokemons" :key="pokemon.id" :pokemon="pokemon"/>
    </div>
    <template v-else>
        <p>Loading...</p>
    </template>

</template>

<script setup>

const pokemons = ref([])
const pokePending = ref(false)
const types = ref([])
const typePending = ref(false)
const displayedPokemons = ref([])


// FETCH POKEMONS AND TYPES
const fetchPokemons = async () => {
    pokePending.value = true
    const response = await $fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
    pokemons.value = response
    displayedPokemons.value = response
    pokePending.value = false
}

const fetchTypes = async () => {
    const response = await $fetch('https://pokebuildapi.fr/api/v1/types')
    types.value = response
    console.log(response)
}

onMounted(() => {
    fetchPokemons()
    fetchTypes()
})

// SEARCH BAR
const searchInput = ref('')

const filterPokemonsByName = () => {
    displayedPokemons.value = pokemons.value.filter(pokemon => pokemon.name.includes(searchInput.value))
    
    if (selectedType.value !== null) {
        filterPokemonsByTypeFrom(displayedPokemons.value)
    }
}

// TYPE FILTER
const selectedType = ref(null)

const filterPokemonsByTypeFrom = (pokeList) => {
    // If a type is selected
    if (selectedType.value === null) {
        displayedPokemons.value = pokeList
        return
    }
    
    // Filter the pokemons
    displayedPokemons.value = []
    for (let pokemon of pokeList) {
        for (let pokemonType of pokemon.apiTypes) {
            if (pokemonType.name === selectedType.value.name) {
                displayedPokemons.value.push(pokemon)
            }
        }
    }
}

const toggleType = (type) => {
    if (selectedType.value === type) {
        selectedType.value = null
        displayedPokemons.value = pokemons.value
        return
    }
    selectedType.value = type
    filterPokemonsByTypeFrom(pokemons.value)
}

</script>