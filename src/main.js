import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
import MyModal from './components/MyModal.vue'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .component('MyButton', MyButton)
    .component('MyInput', MyInput)
    .component('MyModal', MyModal)
    .mount('#app')