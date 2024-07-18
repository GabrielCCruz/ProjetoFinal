<template>
  <div id="app">
    <nav>
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
  color: #4267B2;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>
