<template>
  <div class="Container">
    <v-card width="940px" v-model="valid" height="400">
      <v-card-title> Cadastro de Usuário </v-card-title>
      <section class="form">
        <v-form ref="form" lazy-validation>
          <v-container fluid>
            <v-text-field
              v-model="name"
              :counter="40"
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              label="Nome completo"
              required
              outlined
              clearable
            ></v-text-field>

            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              label="E-mail"
              required
              outlined
              clearable
              class="pt-5"
            ></v-text-field>

            <section class="buttons">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Enviar
              </v-btn>

              <v-btn color="error" @click="reset"> Cancelar </v-btn>
            </section>
          </v-container>
        </v-form>
      </section>
    </v-card>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  validations: {
    email: { required, email },
    name: {
      required,
      MaxLength: function (value) {
        return value === null || value.length >= 5 && value.length < 40;
      },
    },
  },
  data: () => ({
    valid: true,
    name: "",
    email: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
      !this.$v.name.MaxLength && errors.push("Nome deve conter entre 5 à 40 caracteres");
      return errors;
    },
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
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