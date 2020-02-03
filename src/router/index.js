import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
// import EventCreate from '../views/EventCreate.vue'
// import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)

// instead of the hash mode of router, for dev env:
// for prod - see docs and set up the server
const mode = 'history'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    // path: '/event',
    // dynamic segment:
    path: '/event/:id',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (EventShow.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "EventShow" */
        '../views/EventShow.vue'
      ),
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent.vue')
  }
  // {
  //   path: '/EventShow',
  //   redirect: { name: 'EventShow' }
  // }
]

const router = new VueRouter({
  routes,
  mode
})

export default router
