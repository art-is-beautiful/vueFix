import { createRouter, createWebHistory } from 'vue-router'
import signIn1 from '../views/signIn1.vue'
import signIn2 from '../views/signIn2.vue'
import signIn3 from '../views/signIn3.vue'
import signIn4 from '../views/signIn4.vue'
import signUp1 from '../views/signUp1.vue'
import signUp2 from '../views/signUp2.vue'
import signUp3 from '../views/signUp3.vue'
import profile1 from '../views/profile1.vue'
import profile2 from '../views/profile2.vue'
import results1 from '../views/results1.vue'
import results2 from '../views/results2.vue'
import admin from '../views/admin.vue'

const routes = [
  {
    path: '/signIn1',
    name: 'Home',
    component: signIn1
  },
  {
    path: '/signIn2',
    name: 'signIn2',
    component: signIn2
  },
  {
    path: '/signIn3',
    name: 'signIn3',
    component: signIn3
  },
  {
    path: '/signIn4',
    name: 'signIn4',
    component: signIn4
  },
  {
    path: '/signUp1',
    name: 'signUp1',
    component: signUp1
  },
  {
    path: '/signUp2',
    name: 'signUp2',
    component: signUp2
  },
  {
    path: '/signUp3',
    name: 'signUp3',
    component: signUp3
  },
  {
    path: '/profile1',
    name: 'profile1',
    component: profile1
  },
  {
    path: '/profile2',
    name: 'profile2',
    component: profile2
  },
  {
    path: '/results1',
    name: 'result1',
    component: results1
  },
  {
    path: '/results2',
    name: 'results2',
    component: results2
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
