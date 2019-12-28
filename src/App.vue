<template>
  <div id="app">
    <entry-head-bar></entry-head-bar>
    <register></register>
    <router-view/>
  </div>
</template>

<script>
import EntryHeadBar from './components/HeadBar/EntryHeadBar'
import Login from './components/Login/Login'
import EntryPageSlider from './components/EntryPageSlider/EntryPageSlider'
import Register from './components/register/register'
import PersonalHeadBar from './components/HeadBar/PersonalHeadBar'
import PersonalIndexPage from './components/PersonalIndexPage/PersonalIndexPage'


export default {
  name: 'App',
  components: {
    EntryHeadBar,
    Login,
    EntryPageSlider,
    Register,
    PersonalHeadBar,
    PersonalIndexPage
  },
  mounted () {
    this.setHeight()
  },
  data () {
    return {
      pageHeight: {
        height: '',
      }
    }
  },
  methods: {
    setHeight () {
      let body = document.getElementsByTagName('body')
      let app = document.getElementById('app')
      app.style.setProperty('height', `${window.innerHeight - 60}px`, 'important')
      body[0].style.setProperty('height', `${window.innerHeight}px`, 'important')
      console.log(body[0].style.height)
    }
  }
}
</script>

<style>
body {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0px;
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
