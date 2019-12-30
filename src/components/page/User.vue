<template>
    <div id="user">
        <personal-head-bar></personal-head-bar>
        <personal-index-page></personal-index-page>
    </div>
</template>

<script>
import PersonalHeadBar from '../HeadBar/PersonalHeadBar'
import PersonalIndexPage from '../PersonalIndexPage/PersonalIndexPage'

export default {
    components: {
        PersonalHeadBar,
        PersonalIndexPage
    }
}
</script>

<style scoped>
#user {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>