<template>
    
    <SearchBar @new-search="(srch) => filterPokemonsByName(srch)" />
   
    <Caroussel title="Types" :loading="typePending">
        <button v-for="type in types" :key="type.id" @click="toggleType(type)"
            :class="selectedType == type ? 'border-2 border-primary-500 rounded-lg bg-primary-200' : ''">
            <TypeCard :type />
        </button>
    </Caroussel>

    <Caroussel title="Pokemons" :loading="pokePending" class="mt-4">
        <PokemonCard v-for="pokemon in displayedPokemons" :key="pokemon.id" :pokemon="pokemon">
            <Button content="See Pokemon" @click="goToPokemon(pokemon)" type="secondary" size="sm" />
        </PokemonCard>
    </Caroussel>

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
    typePending.value = true
    const response = await $fetch('https://pokebuildapi.fr/api/v1/types')
    types.value = response
    typePending.value = false
}

onMounted(() => {
    fetchPokemons()
    fetchTypes()
})

// SEARCH BAR
const filterPokemonsByName = (search) => {
    displayedPokemons.value = pokemons.value.filter(pokemon => pokemon.name.includes(search))

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

// NAVIGATION
const router = useRouter()
const goToPokemon = (pokemon) => {
    router.push('/pokemon/' + pokemon.name)
}

</script>