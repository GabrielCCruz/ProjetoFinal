<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <!-- Links de navegação para as páginas de login e registro -->
      <router-link to="/login">Entrar</router-link>
      <router-link to="/register">Registrar</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 1em;
  text-align: center;
}
nav a {
  margin-right: 1em;
  color: #4267B2; /* Cor dos links inspirado no Facebook */
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>