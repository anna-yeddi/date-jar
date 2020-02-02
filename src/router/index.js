import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (EventShow.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "EventShow" */
        '../views/EventShow.vue'
      )
    // "alias" will load the same content to a new page
    // (bad for SEO)
    // alias: '/EventShow'
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  }
  // {
  //   path: '/EventShow',
  //   redirect: { name: 'EventShow' }
  // }
]

const router = new VueRouter({
  routes
})

export default router
