<template>
    <div id="page">
        <div id="page-content">
            <page-content></page-content>
        </div>
        <div id="page-main">
            <router-view />
        </div>
    </div>
</template>

<script>
import PageContent from './PageContent'
export default {
    components: {
        PageContent
    },
    mounted () {
        this.setHeight()
    },
    methods: {
        setHeight () {
            let page = document.getElementById('page')
            page.style.setProperty('height', `${window.innerHeight - 60}px`, 'important')
        }
    }
}
</script>

<style scoped>
#page {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
}
#page-content {
    position: relative;
    width: 17%;
    height: auto;
    background-color: #324777;
}
#page-main {
    position: relative;
    width: 83%;
    height: auto;
    background-color: #ffffff;
}
</style>