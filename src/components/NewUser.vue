<script setup>
import {reactive} from 'vue';

import { useUsersStore } from '../store/users';
const store = useUsersStore();

const newUser = reactive ({
    id: 0,
    name: '',
    phone: '',
    email: '',
    address: '',
});

function addNewUser(){
    const tempUser = {...newUser};
    store.addNewUser(tempUser);
    
    newUser.id = 0;
    newUser.name = '';
    newUser.phone = '';
    newUser.email = '';
    newUser.address = '';
}

</script>

<template>
    <b>Name:</b> <input type="text" v-model="newUser.name">
    <b>Phone:</b> <input type="text" v-model="newUser.phone">
    <b>Email:</b> <input type="text" v-model="newUser.email">
    <b>Address:</b> <input type="text" v-model="newUser.address">
    <button @click="addNewUser">Add</button>
</template>

<style scoped>
</style>