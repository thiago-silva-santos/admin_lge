<template>
  <section class="login-screen" color="bluemoon">
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
          @blur="$v.email.$touch()"
          required
        ></v-text-field>
        <v-text-field
          color="bluemoon"
          label="Senha"
          v-model="password"
          maxLenght="8"
          required
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
        ></v-text-field>
        <div class="btn-container">
          <v-btn
            class="bluemoon v-btn-login"
            v-on:click="logar()"
            type="submit"
          >
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
import { validationMixin } from "vuelidate";
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: {
      required,
      valid: function (value) {      
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        const containsSpecial = /[#?!@$%^&*-]/.test(value);
        return (
          containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial
        );
      },
    },
  },
  name: "Login",
  data: () => ({
    exibeSenha: false,
    email: "",
    password: "",
    // rules: {
    //   emailRules: [
    //     (v) => !!v || "E-mail requerido",
    //     (v) => v.length >= 8 || "Mínimo 8 caracteres",
    //     (v) => v.length <= 40 || "Máximo 30 caracteres",
    //     v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido',
    //   ],

    //   passwordRules: [
    //     (v) => !!v || "Senha requerida",
    //     (v) => v.length >= 8 || "Mínimo 6 caracteres",
    //   ],
    // },
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
      if (!this.$v.password.$invalid) return errors;
      !this.$v.password.required && errors.push("Senha requerida");
      !this.$v.password.invalid && errors.push("Senha inválida");
      return errors;
    },

    // registerMe() {
    //   this.submitted = true;
    //   this.$v.$touch();
    //   if (this.$v.$invalid) {
    //     return false; // stop here if form is invalid
    //   } else {
    //     alert("Form Valid. Move to next screen");
    //   }
    // },
  },

  methods: {
    logar() {
      if (this.username != "" && this.password != "") {
        this.$store.dispatch("acesso/ACESSAR", {
          name: this.username,
          isLogged: true,
        });
      } else {
        alert("Favor preencher os campos!");
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
</style>