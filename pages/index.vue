<template>
    /HOME
</template>

<script setup>

const models = [
    { name: 'Person', route: 'persons' },
    { name: 'Posts', route: 'posts' },
    { name: 'Books', route: 'books' }
]

const selected = ref(models[0])

</script>