<template>
    <Fetcher :model="model" :amount="2"/>
</template>

<script setup>

const route = useRoute()
const model = route.params.model

</script>