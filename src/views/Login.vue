<template>
  <section class="login-screen" color="bluemoon">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Entre com sua conta</h1>
      </div>
      <v-form class="login-box-textfields">
        <v-text-field
          color="bluemoon"
          class="text-field"
          label="Nome"
          :rules="nameRules"
          v-model="input.username"
        ></v-text-field>
        <v-text-field
          color="bluemoon"
          label="Senha"
          :rules="passwordRules"
          v-model="input.password"
        ></v-text-field>
      </v-form>
      <div class="btn-container">
        <v-btn class="bluemoon v-btn-login" v-on:click="login()">
          Entrar
        </v-btn>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    input: {
      username: "",
      password: "",
    },
    valid: false,
    nameRules: [
      (v) => !!v || "Nome é necessário",
      (v) => (v && v.length <= 30) || "Nome deve conter menos de 30 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail é necessário",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Senha é necessária",
      (v) => (v && v.length >= 3) || "Senha deve conter pelomenos 3 caracteres",
    ],
  }),
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password === "admin") {
        this.$store.commit("setAuth", true);
        this.$router.replace({ name: "Home" });
        console.log(this.$store.state.autenticado);
      } else {
        alert("Usuário e / ou senha incorreta");
      }
    },
  },
};
</script>

<style scoped>
.teste {
  width: 300px;
  height: 300px;
}
html {
  overflow-y: hidden !important;
}
.login-screen {
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #0077FF;
}
.login-box-title {
  margin-bottom: 15px;
}
.login-container-box {
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white !important;
  padding: 40px 20px 20px 20px;
}
.text-field {
  margin-bottom: 30px;
}
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.v-btn-login {
  color: white;
}
</style>