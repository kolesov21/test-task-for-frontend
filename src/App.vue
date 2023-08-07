<script setup>
import { reactive } from 'vue';

import Dashbord from './components/Dashbord.vue';
import UsersList from './components/UsersList.vue';
import NewUser from './components/NewUser.vue'

</script>

<template>
  <Dashbord></Dashbord>
  <NewUser></NewUser>
  <UsersList></UsersList>
</template>

<style scoped>
</style>