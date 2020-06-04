import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
var firebase = require("firebase/app");


//require("firebase/firestore");
Vue.config.productionTip = false
    // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYN_YSPHvBw93KdQ632wpZc5_Q9UvUoIU",
    authDomain: "sadi-9be6e.firebaseapp.com",
    databaseURL: "https://sadi-9be6e.firebaseio.com",
    projectId: "sadi-9be6e",
    storageBucket: "sadi-9be6e.appspot.com",
    messagingSenderId: "101473492496",
    appId: "1:101473492496:web:b543f8a8f5eb3c8b5e7495"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//const firebaseApp = firebase.initializeApp(firebaseConfig);
//export default firebaseApp.firestore()
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')