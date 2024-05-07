<template>
    <div class="max-w-[500px] flex-wrap" title="Stats">

        <h3 class="text-2xl font-bold text-left ml-6">HP:</h3>
        <div class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
            <h3>Attack</h3>
            <p>{{ props.stats.attack }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
            <h3>Defense</h3>
            <p>{{ props.stats.defense }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
            <h3>Special Attack</h3>
            <p>{{ props.stats.special_attack }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
            <h3>Special Defense</h3>
            <p>{{ props.stats.special_defense }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md m-1 p-2 min-w-[200px]">
            <h3>Speed</h3>
            <p>{{ props.stats.speed }}</p>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    stats: Object
})

console.log(props.stats)
</script>