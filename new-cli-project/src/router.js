import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "home" */ '@/components/contents/mainContents.vue')
const SignIn = () => import(/* webpackChunkName: "signIn" */ '@/components/contents/signIn.vue')
const SignUp = () => import(/* webpackChunkName: "signUp" */ '@/components/contents/signUp.vue')
const Omg = () => import(/* webpackChunkName: 'omg' */ '@/components/contents/ohMyGirl.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/omg',
      name: 'omg',
      component: Omg,
    },
  ]
})
