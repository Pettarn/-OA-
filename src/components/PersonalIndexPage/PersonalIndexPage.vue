<template>
    <div id="page">
        <div id="page-content">
            <page-content></page-content>
        </div>
        <div id="page-main"></div>
    </div>
</template>

<script>
import PageContent from './PageContent'
export default {
    components: {
        PageContent
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