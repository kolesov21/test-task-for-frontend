import { defineStore } from 'pinia'
import {reactive} from 'vue';

export const useUsersStore = defineStore('users', () => {
  //let users = reactive();

  function deleteUser(userId){
    const index = users.findIndex(obj => obj.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
    }
  }

  function addNewUser(newUser){
    const newUserId = getLastObjectId(users) + 1;
    newUser.id = newUserId;
    users.push(newUser);

    function getLastObjectId(arr){
      if (arr.length === 0) {
        return 0;
      }
      const lastObject = arr[arr.length - 1];
      return lastObject.id;
    }
  }

  function updateUserData(tempUser, userId){
    const indexToUpdate = users.findIndex(obj => obj.id === userId);
    if (indexToUpdate !== -1) {
      users[indexToUpdate] = { ...users[indexToUpdate], ...tempUser};
    }
  }

  return {users, deleteUser, addNewUser, updateUserData};
})