<template>
    <div id="page">
        <div id="page-content" :class="{hidden: isExtend}">
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
    data () {
        return {

        }
    },
    components: {
        PageContent
    },
    mounted () {
        console.log(this.isExtend)
        this.setHeight()
    },
    methods: {
        setHeight () {
            let page = document.getElementById('page')
            page.style.setProperty('height', `${window.innerHeight - 60}px`, 'important')
        },
    },
    computed: {
        isExtend: {
            get () {
                return this.$store.state.isExtend
            }
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
    transition: all 1s ease-in-out;
}
#page-main {
    position: relative;
    width: 83%;
    height: auto;
    background-color: #ffffff;
}
.hidden {
    width: 0% !important;
    transition: all 1s ease-in;
}
</style>