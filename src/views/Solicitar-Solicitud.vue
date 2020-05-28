<template>
  <div>
    <v-row>
      <v-col xs="12" md="8" offset-md="2" class="mt-10">
        <v-card>
          <v-card-title>Proceso para Solicitar un Trabajo</v-card-title>
          <v-row class="mx-5">
            <v-col xs12>
              <v-select solo :items="dat_area" v-model="area" label="Seleccione el Area" required></v-select>
            </v-col>

            <v-col xs12>
              <v-select
                solo
                :items="data_tipo_solicitud"
                v-model="tipo_solicitud"
                label="Seleccione el Tipo de Solicitud"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col xs12>
              <v-file-input
                v-model="files"
                placeholder="Agregar Documento"
                label="Buscar"
                multiple
                prepend-icon="mdi-paperclip"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">{{ text }}</v-chip>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col xs12>
              <v-text-field solo label="Asunto de Solicitud" v-model="asunto" required></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col xs12>
              <v-textarea
                v-model="observacion"
                clearable
                clear-icon="cancel"
                label="Cuerpo de la Solicitud"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="mx-6">
            <v-col xs12>
              <v-btn block color="success" @click="asignar_Solicitud" dark>
                <v-icon>send</v-icon>
                 Solicitar</v-btn>
            </v-col>
          </v-row>
          <v-row class="mx-6">
            <v-col xs12>
              <v-btn block color="error" dark>
               <v-icon>clear</v-icon>Limpiar Datos
               </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
  data: () => ({
    asunto: "",
    observacion: "",
    files: [],
    area: "",
    dat_area: ['SGD','BDI','Planifiación y Estudio'],
    data_tipo_solicitud: ['Actualizacioes SADI'],
    tipo_solicitud: "",
    datos_solicitud: []
  }),
  methods: {

    ...mapMutations(['agregar_Solicitud']),
    asignar_Solicitud()
    {
       this.agregar_Solicitud({codigo:'SLT-20201596323',area:this.area,asunto:this.asunto,observacion:this.observacion,tipo:this.tipo_solicitud,solicitante:'Luis Mercado'});
       console.log('Solcitud Enviada')
    }
    
  }
};
</script>