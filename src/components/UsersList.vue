<script setup>
import User from './User.vue'
import { useUsersStore } from '../store/users';

const store = useUsersStore();


</script>

<template>
    <div v-for="user in store.users" :key="user.id">
        <User :userData="user"></User>
    </div>
</template>

<style scoped>
</style>