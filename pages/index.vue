<template>
    <div>
        <button v-for="model in models" :key="model.name" @click="selected = model" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {{ model.name }}
        </button>
    </div>
    <Fetcher :model="selected" :amount="2" />
</template>

<script setup>

const models = [
    { name: 'Person', route: 'persons' },
    { name: 'Posts', route: 'posts' },
    { name: 'Books', route: 'books' }
]

const selected = ref(models[0])

</script>