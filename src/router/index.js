import Vue from 'vue'
import Router from 'vue-router'

import Entry from '../components/page/Entry.vue'
import User from '../components/page/User.vue'

import EntryPageSlider from '../components/EntryPageSlider/EntryPageSlider.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/register/register.vue'
import Attendence from '../components/actions/Attendence.vue'
import NetDisk from '../components/actions/NetDisk.vue'
import UpdateUserInfo from '../components/actions/UpdateUserInfo.vue'
import Repass from '../components/actions/Repass.vue'

// chat 组件
import Chat from '../components/chat/ChatFrame.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Entry,
      children: [
        {
          path: '',
          component: EntryPageSlider,
          children: [
            {
              path: 'login',
              component: Login
            }
          ]
        },
        {
          path: 'register',
          component: Register,
          children: [
            {
              path: 'login',
              component: Login
            }
          ]
        }
      ]
    },
    {
      path: '/user/',
      component: User,
      children: [
        {
          path: 'attendence',
          component: Attendence
        },
        {
          path: 'netdisk',
          component: NetDisk
        },
        {
          path: 'updateUserInfo',
          component: UpdateUserInfo
        },
        {
          path: 'repass',
          component: Repass
        }
      ]
    },
    {
      path: '/chat',
      component: Chat
    }
  ]
})
