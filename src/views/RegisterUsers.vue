<template>
  <div class="Container">
    <v-card width="940px" v-model="valid" height="400">
      <v-card-title> Cadastro de Usuário </v-card-title>
      <section class="form">
        <v-container fluid>
          <v-form ref="form" v-model="form" lazy-validation @submit.prevent="isValidate">
            <v-text-field
              v-model="name"
              :counter="40"
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              label="Nome completo"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              label="E-mail"
              required
              :rules="[required]"
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
    form: true
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("E-mail inválido");
      !this.$v.email.required && errors.push("E-mail requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Campo requerido!");
      !this.$v.name.MaxLength &&
        errors.push("Nome deve conter entre 5 à 40 caracteres");
      return errors;
    },
    required: value => !!value || "Campo requerido"
  },

  methods: {
    validate() {
      if (this.validateSubmit()) {
        this.$store.dispatch("cadastro/CADASTRAR_USUARIO", {
          email: this.email,
          name: this.name,
        });
        this.$store.commit("alert/HIDE_ALERT");
      } else if (this.email == "" && this.name == "" || !this.email == "" && this.name == "" || !this.name == "" && this.email == "") {
        this.$store.commit("alert/SHOW_ALERT", {
          description: "Favor preencher todos os campos!",
          type: "warning",
        });
      } else {
        this.$store.commit("alert/SHOW_ALERT", {
          description: "Alguns dados estão inválidos!",
          type: "warning",
        });
      }
    },
    reset() {
      this.email = "";
      this.name = "";
    },
    isValidate() {
        this.$refs.form.validate()
        console.log(this.$refs.form.validate())
    },

    validateSubmit() {
      return (
        this.$v.email.email &&
        this.$v.name &&
        this.email != "" &&
        this.name != ""
      );
    },
  },

  watch: {
    name(value) {
      if (value) {
        this.$store.commit("alert/HIDE_ALERT");
      } else console.log(value);
    },
    email(value) {
      if (value) this.$store.commit("alert/HIDE_ALERT");
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
  justify-content: end;
  align-items: flex-end;
  height: 110px;
  padding: 5px;
}
</style>