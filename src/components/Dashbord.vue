<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../store/users';
import { useAuth0 } from '@auth0/auth0-vue';

import NewUser from './NewUser.vue'

const store = useUsersStore();
const open = ref(false);

const auth0 = useAuth0();
const isAuthenticated = auth0.isAuthenticated;

function login(){
    auth0.loginWithRedirect();
}
function logout(){
    auth0.logout();
}

</script>

<template>
    <div class="flex justify-between max-w-[932px] my-4">
        <div v-if="isAuthenticated">
            <MyButton @click="store.fetchUserData();" >Update users list</MyButton>
            <MyButton @click="open = true">Add new user</MyButton>
            <MyModal v-if="open">
                <NewUser @close="open=false"></NewUser>
            </MyModal>
        </div>
        <div v-else>
            <b>To add, delete, or update user data, first log in</b>
        </div>
        <div>
            <MyButton @click="login" v-if="!isAuthenticated">Log in</MyButton>
            <MyButton @click="logout" v-else>Log out</MyButton>
        </div>
    </div>
</template>

<style scoped lang="sass">
</style>