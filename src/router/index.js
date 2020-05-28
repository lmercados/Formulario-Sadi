import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/Retirar-Transformador',
        name: 'Retirar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Retirar-Transformador.vue')
    },
    {
        path: '/Solicitar-Solicitud',
        name: 'Solicitar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Solicitar-Solicitud.vue')
    },
    {
        path: '/Atender-Solicitud',
        name: 'Atender',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Atender-Solicitud.vue')
    },
    {
        path: '/Historial-Solicitud',
        name: 'Historial',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Historial-Solicitud.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router