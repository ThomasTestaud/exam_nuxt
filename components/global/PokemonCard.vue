<template>
    <div class="bg-white border min-w-[200px] shadow-md rounded-lg m-1 p-4">
        <img :src="image" alt="Pokemon Image">
        <h3 class="text-center text-xl font-bold">{{ name }}</h3>
        <div class="flex justify-around mt-2">
            <div v-for="type in apiTypes">
                <img :src="type.image" alt="type image" class="h-12 w-12 ">
                <p class="text-cente">{{ type.name }}</p>
            </div>
        </div>
        <div class="flex justify-around mt-2">
            <slot />
            <Button content="See Pokemon" @click="goToPokemon(pokemon)" type="secondary" size="sm" />
        </div>
    </div>
</template>

<script setup>

const router = useRouter()

const props = defineProps({
    pokemon: Object
})

const { image, name, apiTypes } = props.pokemon

const goToPokemon = (pokemon) => {
    router.push(`/pokemon/${pokemon.name}`)
}

</script>