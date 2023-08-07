import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';
import './style.css'
import App from './App.vue'

import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
import MyModal from './components/MyModal.vue'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(
       createAuth0({
            domain: "dev-azueegiumdojwgid.eu.auth0.com",
            clientId: "5LlPAnRjraudw5iJikzZzfbS95riJK0N",
            authorizationParams: {
                redirect_uri: 'http://localhost:5173/'
            }
        }) 
    )
    .component('MyButton', MyButton)
    .component('MyInput', MyInput)
    .component('MyModal', MyModal)
    .mount('#app')