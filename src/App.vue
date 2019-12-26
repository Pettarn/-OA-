<template>
  <div id="app">
    <entry-head-bar></entry-head-bar>
    <entry-page-slider></entry-page-slider>
    <router-view/>
  </div>
</template>

<script>
import EntryHeadBar from './components/HeadBar/EntryHeadBar'
import Login from './components/Login/Login'
import EntryPageSlider from './components/EntryPageSlider/EntryPageSlider'


export default {
  name: 'App',
  components: {
    EntryHeadBar,
    Login,
    EntryPageSlider
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
  padding: 0px;
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
