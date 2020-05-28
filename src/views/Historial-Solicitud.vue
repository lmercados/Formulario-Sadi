<template>
  <div>
    <v-row class="container">
      <v-col xs="12" md="12">
        <v-card class="grey lighten-4">
          <v-card-title class="blue--text">Historial de Solicitudes</v-card-title>
          <v-row>
            <v-col>
              <v-text-field class="ml-5" solo label="Digite el Código de la Solicitud"></v-text-field>
            </v-col>
            <v-col>
              <v-btn large color="success ml-0" dark>
                <v-icon>search</v-icon>Consultar
              </v-btn>
            </v-col>
          </v-row>
          <v-col xs="12">
            <v-card>
              <v-card-text class="subtitle-1">
                <div>
                  <span class="font-weight-bold">De:</span>
                  {{nombre}}
                </div>
                <div>
                  <span class="font-weight-bold">Nombre:</span>
                  {{nombre}}
                </div>
                <div>
                  <span class="font-weight-bold">Asunto:</span>
                  {{Asunto}}
                </div>
                <div>
                  <span class="font-weight-bold">Fecha:</span>
                  {{fecha}}
                </div>
                <div>
                  <span class="font-weight-bold">Estado:</span>
                  {{estado}}
                </div>
                <div>
                  <span class="font-weight-bold">Para:</span>
                  {{usuario_destino}}
                </div>

                <v-divider></v-divider>

                <div class="body-1 mt-3 font-weight-black">{{observacion}}</div>
                <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    nombre: "Luis Mercado",
    Asunto: "Desbloqueo de Usuario",
    fecha: "20-05-27",
    observacion:
      "Buenas tardes,Favor de Desbloquear la Solictud." +
      "Saludos," +
      "Luis M.",
    usuario_destino: "Gregorio Contreras",
    estado: "Creada"
  })
};
</script>