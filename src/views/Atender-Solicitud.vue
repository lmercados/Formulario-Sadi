<template>
  <div>
    <v-row>
      <v-col xs="12" md="12" class="mt-10">
        <v-card>
          <v-card-title class="blue--text">Solicitudes de Trabajo Pendientes</v-card-title>
          <v-row class="container">
            <v-col xs12>
              <v-select solo :items="dat_area" label="Seleccione el Area" required></v-select>
            </v-col>

            <v-col xs12>
              <v-select
                solo
                :items="data_tipo_solicitud"
                label="Seleccione el Tipo de Solicitud"
                required
              ></v-select>
            </v-col>
            <v-col xs12>
              <v-btn large color="success" dark>
                 <v-icon>search</v-icon>
                Consultar</v-btn>
            </v-col>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="datos_solicitud"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Accionar sobre Solictud</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-select solo :items="data_usuario" label="Seleccione el Responsable" required></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-textarea  clearable clear-icon="cancel" label="Observación de la Acción"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text>Cancel</v-btn>
          <v-btn color="blue darken-1" text>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    data_usuario: ["Luis", "Mercado"],
    dat_area: ["SGD", "BDI", "Planifiación y Estudio"],
    data_tipo_solicitud: ["Actualizacioes SADI"],
    headers: [
      {
        text: "Código",
        align: "start",
        sortable: false,
        value: "codigo"
      },
      {
        text: "Tipo de Solicitud",
        align: "start",
        sortable: false,
        value: "tipo"
      },
      {
        text: "Area",
        align: "start",
        sortable: false,
        value: "area"
      },
      {
        text: "Asunto",
        align: "start",
        sortable: false,
        value: "asunto"
      },
      {
        text: "Estado",
        align: "start",
        sortable: false,
        value: "estado"
      },
      {
        text: "Observación",
        align: "start",
        sortable: false,
        value: "observacion"
      },

      {
        text: "Solicitante",
        align: "start",
        sortable: false,
        value: "solicitante"
      },
      {
        text: "Acción",
        align: "start",
        value: "actions",
        sortable: false
      }
    ]
  }),
  methods: {
    editItem(item) {
      this.dialog = true;
    }
  },
  computed: {
    ...mapState(["datos_solicitud"])
  }
};
</script>