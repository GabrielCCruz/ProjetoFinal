// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Cria e monta a aplicação Vue
createApp(App)
  .use(router)
  .mount('#app');