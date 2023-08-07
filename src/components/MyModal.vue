<script setup>
</script>

<template>
    <Teleport to="body">
        <div class="modal fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity ease-in-out duration-300 flex justify-center items-center">
            <slot></slot>
        </div>
    </Teleport>
</template>

<style scoped>
</style>