import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import router from '../router/index.js';

export default new Vuex.Store({
    state: {
        isLogged: false,
        datos_solicitud: [],
        step: 1
    },
    mutations: {
        modificarStep(state, valor) {
            state.step = valor;
        },
        agregar_Solicitud(state, payload) {
            state.datos_solicitud.push({
                codigo: payload.codigo,
                area: payload.area,
                tipo: payload.tipo,
                asunto: payload.asunto,
                observacion: payload.observacion,
                solicitante: payload.solicitante
            });

        },
        Logear(state) {
            state.isLogged = true;
            router.push('/')
            window.localStorage.setItem("token", "1");

        }
    },
    actions: {},
    modules: {}
})