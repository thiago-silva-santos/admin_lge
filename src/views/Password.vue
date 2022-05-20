<template>
  <section class="login-screen">
    <EmptyFieldsAlertVue
      :title="revealAlert.title"
      @click="revealAlert.status = !revealAlert.status"
      v-if="revealAlert.status"
    />
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
          tabindex="1"
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
          tabindex="1"
        ></v-text-field>
        <div class="btn-container">
          <v-btn class="space_cadet v-btn-login" @click="enviar()">
            Criar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import EmptyFieldsAlertVue from "../components/Alerts/EmptyFieldsAlert.vue";
export default {
  components: {
    EmptyFieldsAlertVue,
  },
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
        return value === this.password;
      },
    },
  },

  data: () => ({
    show_password1: false,
    show_password2: false,
    password: "",
    password2: "",
    revealAlert: {
      status: false,
      title: "",
    },
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
      !this.$v.password2.Same && errors.push("A senha deve ser igual");

      return errors;
    },
  },

  methods: {
    enviar() {
      if (this.validateSubmit()) {
        this.$store.dispatch("acesso/NOVA_SENHA", {
          password: this.password,
        });
      } else if(this.password == "" && this.password2 == "") {
        this.revealAlert.status = true;
        this.revealAlert.title = "Favor preencher os campos!"
      } else {
        this.revealAlert.status = true;
        this.revealAlert.title = "Alguns dados estão inválidos!"
      }
    },

    validateSubmit() {
      return (
        this.$v.password.Lowercase &&
        this.$v.password.Uppercase &&
        this.$v.password.Special &&
        this.$v.password.Number &&
        this.$v.password2.Same &&
        this.password != "" &&
        this.password2 != ""
      );
    },
  },

  watch: {
    revealAlert(v) {
      console.log(v);
    },
    password(v) {
      if (v) {
        this.revealAlert.status = false;
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
  background-color: #17183b;
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

@media (max-width: 600px) {
  .login-container-box {
    width: 90%;
  }
}
</style>