<template>
  <div id="app">
    <entry-head-bar></entry-head-bar>
    <router-view/>
  </div>
</template>

<script>
import EntryHeadBar from './components/HeadBar/EntryHeadBar'

export default {
  name: 'App',
  components: {
    EntryHeadBar
  }
}
</script>

<style>
body {
  position: relative;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
