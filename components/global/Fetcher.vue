<template>
    <div class="flex flex-col items-center">
        <input type="number" v-model="amount" class="border rounded text-center" />
        <div v-if="pending" class="p-8">
            <Icon name="svg-spinners:bars-rotate-fade" class="text-5xl" />
        </div>

        <div v-else class="mt-4">

            <div class="flex justify-end mb-2">
                <div v-if="isSupported">
                    <Button @click="copy(JSON.stringify(data?.[props.model]))" content="Copy" type="secondary" size="sm"/>
                </div>
                <p v-else>
                    Your browser does not support Clipboard API
                </p>
            </div>

            <pre class=" bg-gray-200 rounded p-4 text-xs">
                {{ data?.[props.model] }}
                </pre>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })

const props = defineProps({
    model: String,
    amount: Number
})

const amount = ref(props.amount)

const url = computed(() => '/api/' + props.model)
const query = computed(() => ({ amount: amount.value || 3 }))
const headers = { 'Authorization': 'secret' }

const { data, pending } = useFetch(url, { query, headers })

</script>