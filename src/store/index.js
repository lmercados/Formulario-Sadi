import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        datos_solicitud: []
    },
    mutations: {
        agregar_Solicitud(state, payload) {
            state.datos_solicitud.push({
                codigo: payload.codigo,
                area: payload.area,
                tipo: payload.tipo,
                asunto: payload.asunto,
                observacion: payload.observacion,
                solicitante: payload.solicitante
            });

        }
    },
    actions: {},
    modules: {}
})