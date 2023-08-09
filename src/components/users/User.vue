<script setup>
import { ref, reactive } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue';
import { useUsersStore } from '@/store/users';

const { userData } = defineProps(['userData']);

const store = useUsersStore();

let showEdit = ref(false);
let updatedUser = reactive ({
    _id: userData._id,
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    address: userData.address,
});

const auth0 = useAuth0();
const isAuthenticated = auth0.isAuthenticated;

function updateUserData(){
    store.updateUserData(updatedUser);
    showEdit = ref(false);
}
</script>

<template>
    <div v-if="showEdit === true">
        <b>Name:</b> <MyInput v-model="updatedUser.name"/>
        <b>Phone:</b> <MyInput v-model="updatedUser.phone"/>
        <b>Email:</b> <MyInput v-model="updatedUser.email"/>
        <b>Address:</b> <MyInput v-model="updatedUser.address"/>
        <MyButton @click="updateUserData">Save</MyButton>
        <MyButton @click="showEdit = false">Close</MyButton>
    </div>
    <div v-else>
        <b>Name:</b> {{userData.name}}
        <b>Phone:</b> {{userData.phone}}
        <b>Email:</b> {{userData.email}}
        <b>Address:</b> {{userData.address}}
        <MyButton @click="showEdit = true" v-if="isAuthenticated">Update</MyButton>
        <MyButton @click="store.deleteUser(userData._id)" v-if="isAuthenticated">Delete</MyButton>
    </div>
</template>

<style scoped>
</style>