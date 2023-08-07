<script setup>
import { ref, reactive } from 'vue'

import { useUsersStore } from '../store/users';
const store = useUsersStore();

const { userData } = defineProps(['userData']);

let showEdit = ref(false);
let tempUser = reactive ({
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    address: userData.address,
});

function updateUserData(){
    store.updateUserData(tempUser, userData.id);
    showEdit = ref(false);
}
</script>

<template>
    <b>Id:</b> {{userData.id}}
    <b>Name:</b> {{userData.name}}
    <b>Phone:</b> {{userData.phone}}
    <b>Email:</b> {{userData.email}}
    <b>Address:</b> {{userData.address}}
    <button @click="showEdit = true">Update</button>
    <button @click="store.deleteUser(userData.id)">Delete</button>

    <div v-if="showEdit === true">
        <b>Name:</b> <input type="text" v-model="tempUser.name">
        <b>Phone:</b> <input type="text" v-model="tempUser.phone">
        <b>Email:</b> <input type="text" v-model="tempUser.email">
        <b>Address:</b> <input type="text" v-model="tempUser.address">
        <button @click="updateUserData">Save</button>
        <button @click="showEdit = false">Close</button>
    </div>
</template>

<style scoped>
</style>