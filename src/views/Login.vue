<template>
  <section class="login-screen" color="bluemoon">
    <EmptyFieldsAlertVue
      :title="revealAlert.title"
      @click="revealAlert.status = !revealAlert.status"
      v-if="revealAlert.status"
    />
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Entre com sua conta</h1>
      </div>
      <v-form class="login-box-textfields" ref="formAcesso" lazy-validation>
        <v-text-field
          color="bluemoon"
          class="text-field"
          label="E-mail"
          v-model="email"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          required
          tabindex="1"
        ></v-text-field>

        <v-text-field
          color="bluemoon"
          label="Senha"
          v-model="password"
          required
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          :append-icon="show_password1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password1 ? 'text' : 'password'"
          @click:append="show_password1 = !show_password1"
          tabindex="1"
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
// import { mapActions } from "vuex";

import { required, email } from "vuelidate/lib/validators";
import EmptyFieldsAlertVue from "../components/Alerts/EmptyFieldsAlert.vue";
export default {
  components: {
    EmptyFieldsAlertVue,
  },
  validations: {
    email: { required, email },
    password: {
      required,
      Uppercase: function (value) {
        return value === this.password;
      },
    },
  },
  name: "Login",
  data: () => ({
    show_password1: false,
    email: "",
    password: "",
    revealAlert: {
      status: false,
      title: "",
    },
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("E-mail inválido");
      !this.$v.email.required && errors.push("E-mail requerido");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Senha requerida");
      return errors;
    },
  },

  created() {},

  methods: {
    logar() {
      if (this.validateSubmit()) {
        this.$store.dispatch("acesso/ACESSAR", {
          email: this.email,
          isLogged: true,
        });
      } else if (this.email == "" && this.password == "") {
        this.revealAlert.status = true;
        this.revealAlert.title = "Favor preencher os campos!";
      } else {
        this.revealAlert.status = true;
        this.revealAlert.title = "Alguns dados estão inválidos!";
      }
    },

    validateSubmit() {
      return (
        this.$v.email.email &&
        this.$v.password &&
        this.email != "" &&
        this.password != ""
      );
    },
  },

  watch: {
    email(value) {
      if (value) this.revealAlert.status = false;
    },
    revealAlert(value) {
      console.log(value.status);
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
  background-color: #0077ff;
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

.v-text-field >>> .v-input__append-inner {
  position: absolute !important;
  right: 5px !important;
  padding: 0;
}

@media (max-width: 600px) {
  .login-container-box {
    width: 90%;
  }
}
</style>