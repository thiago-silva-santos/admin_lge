<template>
  <div class="Container">
    <v-card width="940px" v-model="valid" height="400">
      <v-card-title> Cadastro de Usuário </v-card-title>
      <section class="form">
        <v-container fluid>
          <v-form
            ref="form"
            v-model="form"
            lazy-validation
            @submit.prevent="submit"
          >
            <v-text-field
              v-model="name"
              :counter="40"
              :rules="rules.nameRules"
              label="Nome completo"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
              :rules="rules.emailRules"
              outlined
              class="pt-5"
            ></v-text-field>
            <section class="buttons">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                type="submit"
              >
                Enviar
              </v-btn>

              <v-btn color="error" @click="reset"> Cancelar </v-btn>
            </section>
          </v-form>
        </v-container>
      </section>
    </v-card>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  components: {},
  validations: {
    email: { required, email },
    name: {
      required,
      MaxLength: function (value) {
        return value === null || (value.length >= 5 && value.length < 40);
      },
    },
  },
  data: () => ({
    valid: true,
    name: "",
    email: "",
    form: true,
    rules: {
      nameRules: [
        (v) => !!v || "Nome é requerido!",
        (v) =>
          (v && v.length <= 40) || "O nome deve ter entre 5 à 40 caracteres.",
      ],
      emailRules: [
        (v) => !!v || "E-mail é requerido!",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido!",
      ],
    },
  }),

  methods: {
    submit() {
      if (this.isFormValid()) {
        this.$store.dispatch("cadastro/CADASTRAR_USUARIO", {
          email: this.email,
          name: this.name,
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    isFormValid() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.Container {
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 110px;
  padding: 5px;
}
</style>