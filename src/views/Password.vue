<template>
  <section class="login-screen">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Crie uma nova senha</h1>
      </div>
      <v-form class="login-box-textfields" ref="formAcesso" lazy-validation>
        <v-text-field
          color="space_cadet"
          class="text-field"
          label="Nova senha"
          v-model="password"
          minLength="8"
          required
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          :append-icon="show_password1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password1 ? 'text' : 'password'"
          @click:append="show_password1 = !show_password1"
        ></v-text-field>
        <v-text-field
          color="space_cadet"
          class="text-field"
          label="Digite a senha novamente"
          v-model="password2"
          required
          :error-messages="passwordErrors2"
          @input="$v.password2.$touch()"
          :append-icon="show_password2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password2 ? 'text' : 'password'"
          @click:append="show_password2 = !show_password2"
        ></v-text-field>
        <div class="btn-container">
          <v-btn class="space_cadet v-btn-login">
            Criar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  validations: {
    password: {
      required,

      Uppercase: function (value) {
        return /[A-Z]/.test(value);
      },

      Lowercase: function (value) {
        return /[a-z]/.test(value);
      },

      Number: function (value) {
        return /[0-9]/.test(value);
      },

      Special: function (value) {
        return /[#?!@$%^&*-]/.test(value);
      },
    },
    password2: {
      required,
      Same: function (value) {
        return value === this.password
        ;
      },
    },
  },

  data: () => ({
    show_password1: false,
    show_password2: false,
    password: "",
    password2: "",
  }),
  computed: {

    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Senha requerida");
      !this.$v.password.Uppercase &&
        errors.push("A senha deve conter pelo menos uma letra maiúscula");
      !this.$v.password.Lowercase &&
        errors.push("A senha deve conter pelo menos uma letra minúscula");
      !this.$v.password.Number &&
        errors.push("A senha deve conter pelo menos um número");
      !this.$v.password.Special &&
        errors.push("A senha deve conter pelo menos um caractere especial");

      return errors;
    },
    passwordErrors2() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      !this.$v.password2.required && errors.push("Senha requerida");
      !this.$v.password2.Same && errors.push("A senha deve ser igual")

      return errors;
    },
  },

  methods: {
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
  background-color: #17183B;
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
.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.v-btn-login {
  color: white;
}
.text-field {
  margin-bottom: 30px;
}
</style>