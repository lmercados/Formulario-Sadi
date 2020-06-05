import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
Vue.use(VueRouter)

const routes = [{
        path: '/Retirar-Transformador',
        name: 'Retirar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Retirar-Transformador.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/Solicitar-Solicitud',
        name: 'Solicitar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Solicitar-Solicitud.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/Atender-Solicitud',
        name: 'Atender',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Atender-Solicitud.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/Historial-Solicitud',
        name: 'Historial',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Historial-Solicitud.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/Registrar-Usuario',
        name: 'Registrar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Registrar-Usuario.vue'),

    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/sadi',
    routes
})
router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
    const token = window.localStorage.getItem('token');

    if (token === null && rutaProtegida == true) {
        next({ name: 'Registrar' })
    } else {


        next();
    }




})
export default router