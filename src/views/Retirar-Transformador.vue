<template>
  <div>
    <v-row>
      <v-col xs="12" md="8" offset-md="2" class="mt-10">
        <v-card>
          <h2 class="text-center white--text error subtitle-3">Proceso de Intervención</h2>
          <v-form style="border: 2px solid grey;padding: 10px;border-radius: 15px;" class="ma-6">
            <v-card-subtitle class="ml-3 red--text font-weight-light title">Formulario de Retiro</v-card-subtitle>
            <v-row class="ma-6">
              <v-col cols="12" xs12 md="4">
                <datePicker picker="Fecha de Reposición"></datePicker>
              </v-col>
              <v-col
                cols="12"
                xs12
                md="4"
                v-for="(text,indextr) in texto_retirado"
                :key="text.model[indextr]"
              >
                <v-text-field ml-3 v-model="valor" :label="text.name" required></v-text-field>
              </v-col>
              <v-col
                cols="12"
                xs12
                md="4"
                v-for="(item,indexcr) in combo_retirado"
                :key="item.select[indexcr]"
              >
                <v-select
                  ml-3
                  :items="item.data"
                  v-model="item.select[indexcr]"
                  :label="item.name"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
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
                <v-btn @click.stop="dialog_voltajes = true" block color="warning">Agregar Voltajes</v-btn>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-card-subtitle class="ml-3 red--text font-weight-light title">Formulario de Instalado</v-card-subtitle>
            <v-row class="ma-6">
              <v-col
                cols="12"
                xs12
                md="4"
                v-for="(texto_instalado,indexti) in texto_instalado"
                :key="texto_instalado.model[indexti]"
              >
                <v-text-field
                  ml-3
                  v-model="texto_instalado.model[indexti]"
                  :label="texto_instalado.name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-dialog v-model="dialog_materiales" max-width="450" color>
                <v-card class="blue-grey lighten-5">
                  <v-card-title>Agregar Materiales</v-card-title>
                  <v-col cols="12">
                    <v-select
                      ml-3
                      :items="data_materiales"
                      v-model="material"
                      label="Seleccione el Material"
                      required
                    ></v-select>
                    <p>{{material}}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field solo label="Cantidad" v-model="cantidad_material" required></v-text-field>
                  </v-col>
                  <div class="text-center">
                    <v-btn class="mb-5" rounded color="success" @click="agregarMaterial" dark>Agregar</v-btn>
                  </div>
                </v-card>
              </v-dialog>
              <v-col xs12>
                <v-btn
                  @click.stop="dialog_materiales = true"
                  block
                  color="warning"
                >Agregar Materiales</v-btn>
              </v-col>
            </v-row>
            <v-row class="mx-5">
              <v-data-table :headers="headers" :items="materiales_utilizados" hide-default-footer></v-data-table>
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
          </v-form>
        </v-card>
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
            text: 'Material',
            align: 'start',
            sortable: false,
            value: 'material',
          },
          {
            text: 'Cantidad',
            align: 'start',
            sortable: false,
            value: 'cantidad',
          }],
    combo_retirado: [
      { name: "Poste", select: { sPoste: "" }, data: [1, 2, 3] },
      { name: "Causa", select: { sCausa: "" }, data: [4, 5, 6] },
      { name: "Fase", select: { sCausa: "" }, data: [7, 8, 9] },
      { name: "Viviendas", select: { sViviendas: "" }, data: [10, 11, 12] },
      { name: "Fabricante", select: { sFabricante: "" }, data: [13, 14, 15] },
      { name: "Capacidad", select: { sCapacidad: "" }, data: [16, 17, 18] },
      { name: "Circuito", select: { Scircuito: "" }, data: [19, 20, 21] },
      {
        name: "Tipo de Transformador",
        select: { Stipotransfomador: "" },
        data: [22, 23, 24]
      },
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
    texto_retirado: [
      { name: "Serie", model: { tSerier: "" } },
      { name: "Etiqueta Instalada", model: { tCt: "" } },
      { name: "Aviso", model: { tAviso: "" } },
      { name: "Dirección", model: { tDireccion: "" } },
      { name: "Impedancia", model: { tImpedancia: "" } },
      { name: "Referencia", model: { tRefrencia: "" } },
      { name: "Orden", model: { tOrden: "" } }
    ],
    texto_posicion: [
      { name: "Posición 1", model: { tPosicion_1: "" } },
      { name: "Posición 2", model: { tPosicion_2: "" } },
      { name: "Posición 3", model: { tPosicion_3: "" } },
      { name: "Posición 4", model: { tPosicion_4: "" } },
      { name: "Posición 5", model: { tPosicion_5: "" } }
    ],
    texto_instalado: [
      { name: "Serie", model: { tSeriei: "" } },
      { name: "Fabricante", model: { tFabricantei: "" } },
      { name: "Capacidad", model: { tCapacidadi: "" } },
      { name: "Tensión Primaria", model: { tVoltajePrimarioi: "" } },
      { name: "Fases", model: { sFasesi: "" } },
      { name: "Voltaje Fase A", model: { tVoltajeFaseA: "" } },
      { name: "Voltaje Fase B", model: { tVoltajeFaseB: "" } },
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
      this.materiales_utilizados.push({material:this.material,cantidad:this.cantidad_material});
      
    }
  },
  mounted() {}
};
</script>