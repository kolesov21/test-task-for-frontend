<script setup>
import { ref } from 'vue'

import NewUser from './NewUser.vue'

const open = ref(false);
</script>

<template>
    <MyButton>Read all users</MyButton>
    <MyButton @click="open = true">Add new user</MyButton>
    <MyModal v-if="open">
        <NewUser @close="open=false"></NewUser>
    </MyModal>
</template>

<style scoped>
</style>