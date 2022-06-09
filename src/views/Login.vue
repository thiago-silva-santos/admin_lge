<template>
  <section class="login-screen" color="bluemoon">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Entre com sua conta</h1>
      </div>
      <v-form class="login-box-textfields" ref="formLogin" lazy-validation>
        <v-text-field
          color="bluemoon"
          class="text-field"
          label="E-mail"
          v-model="email"
          required
          tabindex="1"
          :rules="rules.emailRules"
        ></v-text-field>

        <v-text-field
          color="bluemoon"
          label="Senha"
          v-model="password"
          required
          :append-icon="show_password1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password1 ? 'text' : 'password'"
          @click:append="show_password1 = !show_password1"
          tabindex="1"
          :rules="rules.passwordRules"
        ></v-text-field>
        <div class="btn-container">
          <v-btn class="bluemoon v-btn-login" v-on:click="logar()">
            Entrar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {

  name: "Login",
  data: () => ({
    show_password1: false,
    email: "",
    password: "",
    rules: {
      emailRules: [
        (v) => !!v || "E-mail é requerido!",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido!",
      ],
      passwordRules: [(v) => !!v || "Senha é requerida!"],
    },
  }),

  methods: {
    logar() {
      if (this.validateSubmit()) {
        this.$store.dispatch("acesso/ACESSAR", {
          email: this.email,
          isLogged: true,
        });
      }
    },

    validateSubmit() {
      return this.$refs.formLogin.validate();
    },
  },
};
</script>

<style scoped>
.login-screen {
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #0077ff;
  flex-direction: column;
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
  color: white !important;
}


@media (max-width: 600px) {
  .login-container-box {
    width: 90%;
  }
}
</style>