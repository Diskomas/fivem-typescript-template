<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue'

const hostName = ref('')

addEventListener('message', (e: { data: any}) => {
    const data = e.data

    if(data.type === 'init')
        hostName.value = data.name
})
</script>

<template>
    <div class="center gap-1">
        <Icon :icon="hostName ? 'ic:round-check' : 'line-md:downloading-loop'" class="text-xl" />
        <p>{{ hostName ? `Resource '${hostName}' initialized, happy scripting` : 'Waiting for resource client' }}</p>
    </div>
</template>

<style scoped>

</style>
