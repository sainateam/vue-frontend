window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
require('bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import axios from 'axios' // we import axios from installed dependencies

Vue.use(axios) // we register axios globally

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faChartArea, faBook, faAngleDown, faUniversity, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretUp, faCaretDown, faChartArea, faBook, faAngleDown, faUniversity, faNewspaper)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Notifications from 'vue-notification'

Vue.use(Notifications)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Vuex from 'vuex'

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

import './main.scss'

import Index from './Index.vue'
import Login from './Login.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login }
]

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://127.0.0.1:8000/static/assets/placeholder.png',
  loading: 'http://127.0.0.1:8000/static/assets/placeholder.png',
  attempt: 1
})

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default new Vuex.Store({
  state: {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'http://127.0.0.1:8000/api/v1/auth/obtain_token/',
      refreshJWT: 'http://127.0.0.1:8000/api/v1/auth/refresh_token/',
      baseUrl: 'http://127.0.0.1:8000/api/v1/'
    }
  },

  mutations: {
    setAuthUser(state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('token');
      state.jwt = null;
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
