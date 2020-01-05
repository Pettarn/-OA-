<template>
    <div id="page">
        <div id="page-content" :class="{hidden: isExtend}">
            <page-content></page-content>
        </div>
        <div id="page-main" :class="{extend: isExtend}">
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
    position: absolute;
    left: 0%;
    width: 17%;
    height: 100%;
    background-color: #324777;
    transition: all .5s ease-in-out;
}
#page-main {
    position: absolute;
    width: 83%;
    right: 0%;
    height: 100%;
    background-color: #ecf0f5;
    transition: all .5s ease-in-out;
}

.hidden {
    left: -17% !important;
    width: 0%;
    overflow: hidden;
    transition: all .5s ease-in-out;
}
.extend {
    width: 100% !important;
}
</style>