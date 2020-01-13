<template>
    <div id="headbar">
        <div id="headbar-brand">
            Baacloud
        </div>
        <div id="headbar-hidden" @click="extend">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shousuohou"></use>
            </svg>
        </div>
        <div id="headbar-personal-setting">
            <div id="headbar-personal-setting-headimage"></div>
            <div id="headbar-personal-setting-name">213</div>
        </div>
        <div id="headbar-logout">退出登录</div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            isExtend: this.$store.state.isExtend
        }
    },
    methods: {
        extend () {
            this.isExtend = !this.isExtend
            this.$store.commit('SET_ISEXTEND', this.isExtend)
            console.log(this.$store.state.isExtend)
        }
    }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#headbar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #3c8dbc;
}

#headbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #ffffff;
    height: 100%;
    width: 17%;
    background-color: #357ca5;
    cursor: pointer;
}

#headbar-hidden {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 3%;
    color: #fff;
    cursor: pointer;
}

#headbar-hidden:hover {
    background-color: #357ca5;
    cursor: pointer;
}
#headbar-personal-setting {
    position: absolute;
    display: flex;
    height: 100%;
    right: 150px;
    width: 15%;
    background-color: #3c8dbc;
}

#headbar-personal-setting:hover {
    background-color: #367fa9;
}

#headbar-personal-setting-headimage {
    height: 100%;
    width: 30%;
}

#headbar-personal-setting-name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70%;
}

#headbar-logout {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 100%;
    right: 20px;
    cursor: pointer;
    color: #ffffff;
}

#headbar-logout:hover {
    background-color: #367fa9;
}
</style>