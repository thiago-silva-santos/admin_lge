<template>
  <section class="login-screen">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Registrar a sua conta</h1>
      </div>
      <v-form class="login-box-textfields">
        <v-text-field
          class="text-field"
          label="Nome"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="E-mail"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          label="Senha"
          :rules="passwordRules"
        ></v-text-field>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    nameRules: [
      (v) => !!v || "Nome é necessário",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail é necessário",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Senha é necessária",
      (v) => (v && v.length >= 3) || "Password must be less than 10 characters",
    ],
  }),
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
  background-color: rgb(255, 196, 0);
}
.login-box-title {
  margin-bottom: 15px;
}
.login-container-box {
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white !important;
  padding: 40px 20px;
}
.text-field {
  margin-bottom: 30px;
}

</style>