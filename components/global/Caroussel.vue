<template>
    <div class="">
        <h2 class="text-2xl font-bold text-left ml-6">{{ props.title }}:</h2>
        <div class="flex overflow-x-auto w-full border-2 border-primary-500 rounded-lg bg-secondary-100"
            v-if="!props.loading">
            <slot />
        </div>
        <template v-else>
            <p>Loading...</p>
        </template>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    loading: Boolean
})


</script>