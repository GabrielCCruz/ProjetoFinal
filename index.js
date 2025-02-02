// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Success from '../components/Success.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
