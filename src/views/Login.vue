<template>
  <section class="login-screen">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Entre com sua conta</h1>
      </div>
      <v-form class="login-box-textfields">
        <v-text-field
          class="text-field"
          label="Nome"
          :rules="nameRules"
          color="primary"
        ></v-text-field>
        <v-text-field label="Senha" :rules="passwordRules" color="red"></v-text-field>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v && v.length <= 30 || "Name must be less than 30 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v && v.length >= 3 || "Password must be less than 10 characters",
    ],
  }),
};
</script>

<style scoped>
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
  background-color: rgb(0, 119, 255);
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
.login-box-textfields > .error--text {
  color: red !important;
}

.login-box-textfields > .v-input--has-state.error--text .v-label {
  color: red !important;
}
</style>