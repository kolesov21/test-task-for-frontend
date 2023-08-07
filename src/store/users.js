import { defineStore } from 'pinia'
import {reactive} from 'vue';

export const useUsersStore = defineStore('users', () => {
  let users = reactive([
    {
      "id": 1,
      "name": "Brock Tucker",
      "phone": "1-329-562-7531",
      "email": "risus.donec@google.org",
      "address": "577-1272 Lacinia Rd."
    },
    {
      "id": 2,
      "name": "Germaine Mckay",
      "phone": "1-687-532-6968",
      "email": "lectus.pede.ultrices@hotmail.org",
      "address": "827-8093 Adipiscing. St."
    },
    {
      "id": 3,
      "name": "Malik Mack",
      "phone": "1-581-456-1526",
      "email": "ultrices@yahoo.org",
      "address": "333-3874 Aliquam Rd."
    },
    {
      "id": 4,
      "name": "Angelica Rollins",
      "phone": "(467) 301-1568",
      "email": "justo.praesent.luctus@yahoo.ca",
      "address": "P.O. Box 748, 2948 Eros Street"
    },
    {
      "id": 5,
      "name": "Fatima Cote",
      "phone": "(349) 382-9505",
      "email": "odio.sagittis@outlook.couk",
      "address": "609-2108 Non Rd."
    }
  ]);

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