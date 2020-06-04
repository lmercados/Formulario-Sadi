import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
var firebase = require("firebase/app");


require("firebase/firestore");
Vue.config.productionTip = false
var firebaseConfig = {
    apiKey: "AIzaSyCT7KdBWBUVQYQCuvFfMoSqIIdoNaCXRY4",
    authDomain: "sadi-248501.firebaseapp.com",
    databaseURL: "https://sadi-248501.firebaseio.com",
    projectId: "sadi-248501",
    storageBucket: "sadi-248501.appspot.com",
    messagingSenderId: "726217112585",
    appId: "1:726217112585:web:919aafcc759816a6b00cd8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')