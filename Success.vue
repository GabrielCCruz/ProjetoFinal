<template>
  <div class="success">
    <h2>Login Realizado!</h2>
    <p>Bem-vindo, você está logado com sucesso.</p>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>
.success {
  max-width: 400px;
  margin: auto;
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 1em;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: green; /* Cor do texto de sucesso */
}
.success h2 {
  color: green; /* Cor do título de sucesso */
}
</style>
