import { createApp } from 'vue'
import App from './App.vue'
import Users from './components/Users.vue'
import './resources/sass/app.scss'

var app = createApp(App);
    app.component("users", Users);
    app.mount('#app');
