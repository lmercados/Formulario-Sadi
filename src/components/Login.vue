<template>
  <div class="container">
    <v-row color="transparent" class="alto justify-center">
      <v-col xs="12" md="6">
        <v-card>
          <v-card-title class="headline">SADI</v-card-title>
          <v-card-subtitle class="title">Crear tu cuenta de SADI</v-card-subtitle>
          <v-stepper v-model="step">
            <v-card-text>
              <v-row>
                <v-col md="6">
                  <v-stepper-content step="1">
                    <v-row cols="12" xs12 md="6">
                      <v-col cols="12" xs12 md="6">
                        <v-text-field label="Nombre" outlined></v-text-field>
                      </v-col>

                      <v-col cols="12" xs12 md="6">
                        <v-text-field label="Apellido" outlined></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" xs12>
                        <v-text-field v-model="email" suffix="@edenorte.com" label="Email" outlined></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" xs12 md="6">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Contraseña"
                          outlined
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" xs12 md="6">
                        <v-text-field
                          v-model="Repeatpassword"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show2 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Confirmación"
                          outlined
                          @click:append="show2 = !show2"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <p>Usa 8 o más caracteres con una combinación de letras, números y símbolos</p>
                    <v-row>
                      <v-col md="6" class="align-self-center">
                        <router-link
                          class="body-1"
                          style="text-decoration: none; color: blue;"
                          :to="{ name:'Login'}"
                        >Acceder a tu cuenta</router-link>
                      </v-col>
                      <v-col md="6" class="align-self-center">
                        <v-btn class="ml-10" color="primary" @click="step = 2">Continue</v-btn>
                      </v-col>
                    </v-row>
                  </v-stepper-content>
                  <v-stepper-content step="2">
                    <v-card>
                      <v-row>
                        <v-col
                          cols="12"
                          xs12
                          md="6"
                          v-for="(item,index) in datos_usuario"
                          :key="index"
                        >
                          <v-text-field
                            v-if="item.tipo==1"
                            outlined
                            ml-3
                            v-model="item.model[index]"
                            :label="item.name"
                            required
                          ></v-text-field>
                          <v-select
                            v-else
                            ml-3
                            :items="item.data"
                            v-model="item.select[index]"
                            :label="item.name"
                            required
                            outlined
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-btn text @click="step = 1" class="red--text">Back</v-btn>
                      <v-btn color="primary" @click="step = 3">Continue</v-btn>
                    </v-card>
                  </v-stepper-content>
                  <v-stepper-content step="3">
                    <v-card>
                      <v-row>
                        <v-col cols="12" xs12>
                          <v-text-field
                            suffix="@edenorte.com"
                            v-model="email"
                            label="Email"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" xs12>
                          <v-text-field
                            outlined
                            ml-3
                            v-model="password"
                            type="password"
                            required
                            label="Contraseña"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-btn color="primary" @click="step = 3">Acceder</v-btn>
                    </v-card>
                  </v-stepper-content>
                </v-col>

                <v-col md="6" class="d-none d-sm-flex">
                  <v-img src="../assets/logosadi.png" aspect-ratio="1" class="grey lighten-2"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-stepper>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Registrar-Usuario",
  data() {
    return {
      email: "",
      step: 1,
      show1: false,
      show2: false,
      password: "",
      Repeatpassword: "",
      datos_usuario: [
        { name: "Código Empleado", model: { tCodigo: "" }, tipo: 1 },
        { name: "Flota", model: { tFlota: "" }, tipo: 1 },
        {
          name: "Sector",
          select: { Ssector: "" },
          data: [19, 20, 21]
        },
        { name: "Gerencia", select: { sGerencia: "" }, data: [1, 2, 3] },
        {
          name: "Departamento",
          select: { sDepartamento: "" },
          data: [10, 11, 12]
        },
        { name: "Puesto", select: { sPuesto: "" }, data: [4, 5, 6] }
      ]
    };
  }
};
</script>
<style scoped>
@media only screen and (min-width: 900px) {
  .alto {
    margin-top: 180px;
  }
}
</style>
