import Vue from 'vue'
import Router from 'vue-router'

import EntryPageSlider from '../components/EntryPageSlider/EntryPageSlider.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/register/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: EntryPageSlider,
      children: [
        {
          path: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
