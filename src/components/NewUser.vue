<script setup>
import {reactive} from 'vue';

const emit = defineEmits(['close'])

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

    emit('close');
}

</script>

<template>
    <div class="flex flex-col min-w-[300px] max-w-[300px] text-base font-normal leading-5 p-1.5 border border-black rounded bg-white">
        <b>Name:</b> <MyInput v-model="newUser.name"/>
        <b>Phone:</b> <MyInput v-model="newUser.phone"/>
        <b>Email:</b> <MyInput v-model="newUser.email"/>
        <b>Address:</b> <MyInput v-model="newUser.address"/>
        <MyButton @click="addNewUser">Add</MyButton>
        <MyButton @click="$emit('close')">Close</MyButton>
    </div>
</template>

<style scoped>
</style>