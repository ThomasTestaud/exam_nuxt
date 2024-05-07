<template>
    <div class="bg-white border min-w-[100px] shadow-md rounded-lg m-1 p-4">
        <img :src="image" alt="Type Image">
        <h3 class="text-center">{{ name }}</h3>
    </div>
</template>

<script setup>

const props = defineProps({
    type: Object
})

const { id, image, name } = props.type

</script>