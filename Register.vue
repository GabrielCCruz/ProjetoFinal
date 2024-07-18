<template>
  <div class="register">
    <h2>Registrar</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Utilizando o componente FormInput -->
      <FormInput label="Nome:" type="text" id="name" v-model="name" required />
      <FormInput label="Email:" type="email" id="email" v-model="email" required />
      <FormInput label="Senha:" type="password" id="password" v-model="password" required />
      <!-- Mensagem de erro -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <!-- Botão de submissão do formulário -->
      <button type="submit">Registrar</button>
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
      name: '', // Armazena o nome do usuário
      email: '', // Armazena o email do usuário
      password: '', // Armazena a senha do usuário
      errorMessage: '' // Armazena a mensagem de erro
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o email já está registrado
        if (users.some(user => user.email === this.email)) {
          this.errorMessage = 'O email já está registrado';
          return;
        }

        // Faz uma requisição POST para a API de registro
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          name: this.name,
          email: this.email,
          password: this.password
        });

        // Simulando uma resposta de sucesso da API
        if (response.status === 201) {
          // Adiciona o novo usuário ao localStorage
          users.push({ name: this.name, email: this.email, password: this.password });
          localStorage.setItem('users', JSON.stringify(users));

          alert('Registro bem-sucedido!');
          this.$router.push('/login');
        } else {
          this.errorMessage = 'Erro ao registrar. Tente novamente.';
        }
      } catch (error) {
        this.errorMessage = 'Erro ao tentar registrar. Tente novamente mais tarde.';
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 1em;
}
</style>
