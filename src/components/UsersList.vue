<script setup>
import User from './User.vue'
import { useUsersStore } from '../store/users';

const store = useUsersStore();


</script>

<template>
    <div class="class=userList max-w-[1024px] flex flex-wrap gap-4">
        <div  v-for="user in store.users" :key="user.id">
            <User 
                :userData="user"
                class="userInfo flex flex-col min-w-[300px] max-w-[300px] text-base font-normal leading-5 p-1.5 border border-black rounded"
            ></User>
        </div>
    </div>
</template>

<style scoped>
</style>