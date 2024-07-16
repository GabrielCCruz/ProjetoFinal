<!-- src/components/Login.vue -->
<template>
  <div class="login">
    <h2>Entrar</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Campo de entrada para o email -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <!-- Campo de entrada para a senha -->
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <!-- Botão de submissão do formulário -->
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '', // Armazena o email do usuário
      password: '' // Armazena a senha do usuário
    }
  },
  methods: {
    handleSubmit() {
      // Recupera os dados do usuário do localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      // Verifica se o email e a senha estão corretos
      if (user && user.email === this.email && user.password === this.password) {
        // Exibe uma mensagem de sucesso
        alert('Login bem-sucedido!');
        // Redireciona para a página de sucesso
        this.$router.push('/success');
      } else {
        // Exibe uma mensagem de erro
        alert('Email ou senha inválidos');
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 1em;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.login h2 {
  color: #4267B2; /* Cor do título inspirado no Facebook */
  text-align: center;
}
.form-group {
  margin-bottom: 1em;
}
label {
  margin-bottom: .5em;
  color: #333333;
  display: block;
}
input {
  border: 1px solid #CCCCCC;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.3em;
}
button {
  padding: 0.7em;
  color: #fff;
  background-color: #4267B2; /* Cor do botão inspirado no Facebook */
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
}
button:hover {
  background-color: #365899; /* Cor do botão ao passar o mouse inspirado no Facebook */
}
</style>