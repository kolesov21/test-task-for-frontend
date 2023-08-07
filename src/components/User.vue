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
    <div v-if="showEdit === true">
        <b>Name:</b> <MyInput v-model="tempUser.name"/>
        <b>Phone:</b> <MyInput v-model="tempUser.phone"/>
        <b>Email:</b> <MyInput v-model="tempUser.email"/>
        <b>Address:</b> <MyInput v-model="tempUser.address"/>
        <MyButton @click="updateUserData">Save</MyButton>
        <MyButton @click="showEdit = false">Close</MyButton>
    </div>
    <div v-else>
        <b>Name:</b> {{userData.name}}
        <b>Phone:</b> {{userData.phone}}
        <b>Email:</b> {{userData.email}}
        <b>Address:</b> {{userData.address}}
        <MyButton @click="showEdit = true">Update</MyButton>
        <MyButton @click="store.deleteUser(userData.id)">Delete</MyButton>
    </div>
</template>

<style scoped>
</style>