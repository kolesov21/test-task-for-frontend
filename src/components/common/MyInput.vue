<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" 
        type="text" class="text-base font-semibold leading-5 p-1.5 border border-black bg-white rounded"
    />
</template>

<style scoped>
</style>