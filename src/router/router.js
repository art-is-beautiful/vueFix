import { createWebHistory, createRouter } from 'vue-router';
import signIn1 from '../views/signIn1.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: signIn1,
        }
    ]
})

export default router;
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
//     {
//         path: '/signin1',
//         component: () => import('../views/signIn1'),
//     },
// ]

// export default new VueRouter({
//     mode: 'history',
//     routes
// })