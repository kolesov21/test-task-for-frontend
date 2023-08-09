<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '@/store/users';

import Dashbord from './components/Dashbord.vue';
import UsersList from './components/users/UsersList.vue';

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