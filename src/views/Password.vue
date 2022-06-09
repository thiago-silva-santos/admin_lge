<template>
  <section class="login-screen">
    <v-card elevation="2" class="login-container-box">
      <div class="login-box-title">
        <h1>Crie uma nova senha</h1>
      </div>
      <v-form class="login-box-textfields" ref="formNewPassword" lazy-validation>
        <v-text-field
          color="space_cadet"
          class="text-field"
          label="Nova senha"
          v-model="password"
          minLength="8"
          required
          :append-icon="show_password1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password1 ? 'text' : 'password'"
          @click:append="show_password1 = !show_password1"
          tabindex="1"
          :rules="rules.passwordRules"
        ></v-text-field>
        <v-text-field
          color="space_cadet"
          class="text-field"
          label="Digite a senha novamente"
          v-model="password2"
          required
          :append-icon="show_password2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show_password2 ? 'text' : 'password'"
          @click:append="show_password2 = !show_password2"
          tabindex="1"
          :rules="rules.passwordRules2"
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
export default {
  data: function () {
    return {
      show_password1: false,
      show_password2: false,
      password: "",
      password2: "",
      rules: {
        passwordRules: [
          (v) => !!v || "Senha é requerida!",
          (v) =>
            /[A-Z]/.test(v) ||
            "A senha deve conter pelo menos uma letra maiúscula",
          (v) =>
            /[a-z]/.test(v) ||
            "A senha deve conter pelo menos uma letra minúscula",
          (v) => /[0-9]/.test(v) || "A senha deve conter pelo menos um número",
          (v) =>
            /[#?!@$%^&*-]/.test(v) ||
            "A senha deve conter pelo menos um caractere especial",
          (v) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres.",
        ],
        passwordRules2: [
          (v) => !!v || "Senha é requerida!",
          (v) => v === this.password || "A senha deve ser igual!",
        ],
      },
    };
  },


  methods: {
    enviar() {
      if (this.validateSubmit()) {
        this.$store.dispatch("acesso/NOVA_SENHA", {
          password: this.password,
        });
      }
    },

    validateSubmit() {
      return (
        this.$refs.formNewPassword.validate()
      );
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