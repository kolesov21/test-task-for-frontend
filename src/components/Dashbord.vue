<script setup>
import { ref } from 'vue'

import NewUser from './NewUser.vue'

const open = ref(false);

</script>

<template>
    <div class="flex justify-between max-w-[932px] my-4">
        <div>
            <MyButton>Read all users</MyButton>
            <MyButton @click="open = true">Add new user</MyButton>
            <MyModal v-if="open">
                <NewUser @close="open=false"></NewUser>
            </MyModal>
        </div>
        <div>
            <MyButton>Log in</MyButton>
        </div>
    </div>
</template>

<style scoped lang="sass">
</style>