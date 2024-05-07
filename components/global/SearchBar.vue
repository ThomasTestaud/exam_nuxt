<template>
    <div class="flex justify-center">
        <div class="border-2 border-primary-500 rounded-full flex">
            <input type="text" class="rounded-l-full text-center" placeholder="Search Pokemon" v-model="search"
                @input="$emit('newSearch', search)" />
            <div class="bg-primary-500 text-white rounded-r-full px-2">
                <Icon name="ic:round-search" />
            </div>
        </div>
    </div>
</template>

<script setup>

// Emit value to parent component
const emit = defineEmits(['newSearch'])

const search = ref('')

</script>