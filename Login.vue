<template>
  <div class="login">
    <h2>Entrar</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Utilizando o componente FormInput -->
      <FormInput label="Email:" type="email" id="email" v-model="email" required />
      <FormInput label="Senha:" type="password" id="password" v-model="password" required />
      <!-- Mensagem de erro -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <!-- Botão de submissão do formulário -->
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Importa a biblioteca Axios
import FormInput from './FormInput.vue'; // Importa o componente FormInput

export default {
  components: {
    FormInput // Registra o componente FormInput
  },
  data() {
    return {
      email: '', // Armazena o email do usuário
      password: '', // Armazena a senha do usuário
      errorMessage: '' // Armazena a mensagem de erro
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o email e a senha correspondem a um usuário registrado
        const user = users.find(user => user.email === this.email && user.password === this.password);

        if (!user) {
          this.errorMessage = 'Email ou senha inválidos';
          return;
        }

        // Faz uma requisição POST para a API de login
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          email: this.email,
          password: this.password
        });

        // Simulando uma resposta de sucesso da API
        if (response.status === 201) {
          alert('Login bem-sucedido!');
          this.$router.push('/success');
        } else {
          this.errorMessage = 'Email ou senha inválidos';
        }
      } catch (error) {
        this.errorMessage = 'Erro ao tentar fazer login. Tente novamente mais tarde.';
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
