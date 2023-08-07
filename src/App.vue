<script setup>
import { onMounted } from 'vue'

import Dashbord from './components/Dashbord.vue';
import UsersList from './components/UsersList.vue';

import { useUsersStore } from './store/users';

const store = useUsersStore();

onMounted(() =>{
  store.fetchUserData();
})
</script>

<template>
  <div>
    <Dashbord></Dashbord>
    <UsersList></UsersList>
  </div>
</template>

<style scoped>
</style>