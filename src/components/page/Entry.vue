<template>
    <div>
        <entry-head-bar></entry-head-bar>
        <router-view />
    </div>
</template>

<script>
import EntryHeadBar from '../HeadBar/EntryHeadBar'
export default {
    components: {
        EntryHeadBar
    }
}
</script>