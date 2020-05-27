<template>
  <div>
    <v-row>
      <v-col xs="12" md="8" offset-md="2" class="mt-10">
        <v-stepper v-model="e6" vertical>
          <v-form>
            <v-card-title class="blue--text">Proceso de Intervención</v-card-title>
            <v-stepper-step :complete="e6 > 1" step="1">Datos Generales</v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <v-row class="ma-6">
                  <v-col cols="12" xs12 md="4">
                    <datePicker solo picker="Fecha de Reposición"></datePicker>
                  </v-col>
                  <v-col
                    cols="12"
                    xs12
                    md="4"
                    v-for="(datos_g,index) in datos_generales"
                    :key="index"
                  >
                    <v-text-field
                      v-if="datos_g.tipo==1"
                      solo
                      ml-3
                      v-model="datos_g.model[index]"
                      :label="datos_g.name"
                      required
                    ></v-text-field>
                    <v-select
                      v-else
                      ml-3
                      :items="datos_g.data"
                      v-model="datos_g.select[index]"
                      :label="datos_g.name"
                      required
                      solo
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card>
              <v-btn class="mx-2" color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>
            <v-stepper-step :complete="e6 > 2" step="2">Transformador a Retirar</v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-row class="ma-6">
                  <v-col cols="12" xs12 md="4" v-for="(tr_r,indexr) in tr_retirar" :key="indexr">
                    <v-text-field
                      v-if="tr_r.tipo==1"
                      solo
                      ml-3
                      v-model="tr_r.model[indexr]"
                      :label="tr_r.name"
                      required
                    ></v-text-field>
                    <v-select
                      v-else
                      ml-3
                      :items="tr_r.data"
                      v-model="tr_r.select[indexr]"
                      :label="tr_r.name"
                      required
                      solo
                    ></v-select>
                  </v-col>
                </v-row>
                <v-dialog v-model="dialog_voltajes" max-width="450" color>
                  <v-card class="blue-grey lighten-5">
                    <v-card-title>Agregar Posiciones</v-card-title>

                    <v-col
                      cols="12"
                      v-for="(texto_p,indext_posicion) in texto_posicion"
                      :key="texto_p.name[indext_posicion]"
                    >
                      <v-text-field
                        solo
                        class="mx-5"
                        v-model="texto_p.model[indext_posicion]"
                        :label="texto_p.name"
                        required
                      ></v-text-field>
                    </v-col>

                    <div class="text-center">
                      <v-btn class="mb-5" rounded color="success" dark>Agregar</v-btn>
                    </div>
                  </v-card>
                </v-dialog>
                <v-col xs12>
                  <v-btn @click.stop="dialog_voltajes = true" color="error" large>Agregar Voltajes</v-btn>
                </v-col>
              </v-card>
              <v-btn class="mx-2" color="primary" @click="e6 = 3">Continue</v-btn>
              <v-btn class="mx-2" text color="warning" @click="e6 = 1">Back</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Transformador a Instalar</v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-row class="ma-6">
                  <v-col cols="12" xs12 md="4" v-for="(tr_i,indexi) in tr_instalar" :key="indexi">
                    <v-text-field
                      solo
                      :disabled="tr_i.disabled"
                      ml-3
                      v-model="tr_i.model[indexi]"
                      :label="tr_i.name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-dialog v-model="dialog_materiales" max-width="450" color>
                    <v-card class="blue-grey lighten-5">
                      <v-card-title>Agregar Materiales</v-card-title>
                      <v-col cols="12">
                        <v-select
                          solo
                          :items="data_materiales"
                          v-model="material"
                          label="Seleccione el Material"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field solo label="Cantidad" v-model="cantidad_material" required></v-text-field>
                      </v-col>
                      <div class="text-center">
                        <v-btn
                          class="mb-5"
                          rounded
                          color="success"
                          @click="agregarMaterial"
                          dark
                        >Agregar</v-btn>
                      </div>
                    </v-card>
                  </v-dialog>
                  <v-col xs12>
                    <v-btn @click.stop="dialog_materiales = true" color="error">Agregar Materiales</v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col xs12 md="12">
                    <v-btn text class="mx-2" color="warning" @click="e6 = 2">Back</v-btn>
                  </v-col>
                </v-row>
              </v-card>
              <v-row class="mx-5">
                <v-card>
                  <v-card-title>Materiales Utilizados</v-card-title>

                  <v-data-table
                    :headers="headers"
                    :items="materiales_utilizados"
                    hide-default-footer
                  ></v-data-table>
                </v-card>
              </v-row>
              <v-row>
                <v-col xs12>
                  <v-btn block color="success" dark>Enviar Datos</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col xs12>
                  <v-btn block color="error" dark>Limpiar Datos</v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
          </v-form>
        </v-stepper>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import datePicker from "../components/datePicker.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    datePicker
  },
  data: () => ({
    e6: 1,
    valor: "",
    dialog_voltajes: false,
    dialog_materiales: false,
    select: null,
    valid: true,
    data_materiales: ["Cut-Out", "Apartarrayos", "Pica Pat"],
    material: "",
    cantidad_material: "",
    materiales_utilizados: [],
    headers: [
      {
        text: "Material",
        align: "start",
        sortable: false,
        value: "material"
      },
      {
        text: "Cantidad",
        align: "start",
        sortable: false,
        value: "cantidad"
      }
    ],
    datos_generales: [
      { name: "Matrícula CT", model: { tCt: "" }, tipo: 1 },
      { name: "Orden", model: { tOrden: "" }, tipo: 1 },
      { name: "Aviso", model: { tAviso: "" }, tipo: 1 },
      { name: "Dirección", model: { tDireccion: "" }, tipo: 1 },
      { name: "Referencia", model: { tRefrencia: "" }, tipo: 1 },
      { name: "Circuito", select: { Scircuito: "" }, data: [19, 20, 21] },
      { name: "Poste", select: { sPoste: "" }, data: [1, 2, 3] },
      { name: "Viviendas", select: { sViviendas: "" }, data: [10, 11, 12] },
      { name: "Causa", select: { sCausa: "" }, data: [4, 5, 6] }
    ],
    tr_retirar: [
      { name: "Serie", model: { tSerieR: "" }, tipo: 1 },
      { name: "Impedancia", model: { tImpedanciaR: "" }, tipo: 1 },
      {
        name: "Tipo de Transformador",
        select: { Stipotransfomador: "" },
        data: [22, 23, 24]
      },
      { name: "Fase", select: { sCausa: "" }, data: [7, 8, 9] },
      { name: "Fabricante", select: { sFabricante: "" }, data: [13, 14, 15] },
      { name: "Capacidad", select: { sCapacidad: "" }, data: [16, 17, 18] },

      { name: "Tipo de Bush", select: { tBush: "" }, data: [25, 26, 27] },
      { name: "Regulación", select: { sRegulacion: "" }, data: [28, 29, 30] },
      {
        name: "Voltaje Secundario",
        select: { sVoltajePrimarior: "" },
        data: [31, 32, 33]
      },
      {
        name: "Voltaje Primario",
        select: { sVoltajeSecundarior: "" },
        data: [34, 35, 36]
      }
    ],

    texto_posicion: [
      { name: "Posición 1", model: { tPosicion_1: "" } },
      { name: "Posición 2", model: { tPosicion_2: "" } },
      { name: "Posición 3", model: { tPosicion_3: "" } },
      { name: "Posición 4", model: { tPosicion_4: "" } },
      { name: "Posición 5", model: { tPosicion_5: "" } }
    ],
    tr_instalar: [
      { name: "Serie", model: { tSeriei: "" } },
      { name: "Fabricante", model: { tFabricantei: "" }, disabled: true },
      { name: "Capacidad", model: { tCapacidadi: "" }, disabled: true },
      {
        name: "Tensión Primaria",
        model: { tVoltajePrimarioi: "" },
        disabled: true
      },
      { name: "Fases", model: { sFasesi: "" }, disabled: true },
      { name: "Voltaje Fase A", model: { tVoltajeFaseA: "" }, disabled: false },
      { name: "Voltaje Fase B", model: { tVoltajeFaseB: "" }, disabled: false },
      { name: "Voltaje Fase C", model: { tVoltajeFaseC: "" } }
    ]
  }),

  methods: {
    ...mapMutations(["picker"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    agregarMaterial() {
      this.materiales_utilizados.push({
        material: this.material,
        cantidad: this.cantidad_material
      });
    }
  },
  mounted() {}
};
</script>