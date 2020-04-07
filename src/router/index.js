import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
// import EventCreate from '../views/EventCreate.vue'
// import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)

// instead of the hash mode of router when # is used in URL to avoid page refresh
// for dev env: mode = 'history' (supports IE 10+, not IE 9)
// for prod - see Vue Router docs and set up the server to always serve index.thml
// This will remove 404 as index.html will always be present
// So at the end of "routes" create a catch-all * notFound component for 404
const mode = 'history'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    meta: {
      title: 'Event List - Date Jar'
    }
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
    // props needed to pass dynamic params
    props: true,
    meta: {
      // TODO: needs a dynamic update of Event Name:
      title: 'Event - Date Jar'
    }
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue'),
    meta: {
      title: 'Create Event - Date Jar'
    }
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent.vue'),
    meta: {
      title: 'Page is not found - Date Jar'
    }
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

// Navigation guard to access and update meta tags:
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
