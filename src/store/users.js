import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useUsersStore = defineStore('users', () => {

  const users = ref ([]);

  function fetchUserData(){
    fetch('https://test-node-server-be1d.onrender.com/users', {method: 'GET'})
      .then((response) => response.json())
      .then((data) => {
        users.value = data;
      })
      .catch((error) => {
        console.error('Error fetching users: ', error)
      })
  }

  function deleteUser(userId){
    fetch(`https://test-node-server-be1d.onrender.com/users/${userId}`, {method: 'DELETE'})
      .then((response) => {
        if (response.ok) {
          users.value = users.value.filter((user) => user._id != userId);
        }
      })
      .catch((error)=>{
        console.error('Error deleting user: ', error)
      })
  }

  function addNewUser(newUser){
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };
    
    fetch('https://test-node-server-be1d.onrender.com/users/add', fetchOptions)
      .then((response) => {
      if (response.ok) {
        fetchUserData();
      }
    })
    .catch((error) => {
      console.error('Error adding user: ', error)
    })
  }

  function updateUserData(updatedUser){
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    };

    fetch('https://test-node-server-be1d.onrender.com/users/update', fetchOptions)
      .then((response) => {
        if (response.ok){
          fetchUserData();
        }
      })
      .catch((error) =>{
        console.error('Error updateing user: ' + error);
      })
  }

  return {users, deleteUser, addNewUser, updateUserData, fetchUserData};
})