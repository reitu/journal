import { createRouter, createWebHistory } from 'vue-router'
import EntryView from '../views/EntryView.vue'
import JournalView from  '../views/JournalView.vue'

const routes = [
  {
    path: '/',
    name: 'journalview',
    component: JournalView
  },
  {
    path: '/entry',
    name: 'entryview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EntryView.vue')
  }
  // {
  //   path: '/journal',
  //   name: 'journal',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/JournalView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
