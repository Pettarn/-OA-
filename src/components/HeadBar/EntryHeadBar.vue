<template>
    <div id="headbar">
        <!-- 商标 -->
        <div id="headbar-brand">
            <div style="font-size: 1.5em; cursor: pointer;">OAMS</div>
            <p style="font-size: 1.5em;">|</p>
            <div style="font-size: 0.9em;">快速、稳定的企业OA办公管理平台</div>
        </div>
        <div id="headbar-blank"></div>
        <div id="headbar-content">
            <div id="headbar-content-normal">首页</div>
            <div id="headbar-content-normal">下载</div>
            <div id="headbar-content-normal">购买</div>
            <div id="headbar-content-normal">帮助</div>
            <div id="headbar-content-normal">关于</div>
            <div>
                <div id="headbar-content-button" @click="handleFirstBtn">{{ firstBtnVal }}</div>
            </div>
            <div>
                <div id="headbar-content-button" @click="handleSecondBtn">{{ secondBtnVal }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        handleFirstBtn () {
            if (this.$store.state.isLogin) {
                this.$router.push('/user')
            } else {
                this.$router.push('/login')
            }
        },
        handleSecondBtn () {
            if (this.$store.state.isLogin) {
                this.$store.commit('SET_ISLOGIN', false)
            } else {
                this.$router.push('/register')
            }
        }
    },
    computed: {
        firstBtnVal: {
            get () {
                if (this.$store.state.isLogin) {
                    return '我的账户'
                } else {
                    return '登录'
                }
            }
        },
        secondBtnVal: {
            get () {
                if (this.$store.state.isLogin) {
                    return '退出登录'
                } else {
                    return '注册'
                }
            }
        }
    }
}
</script>

<style scoped>
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
    height: 90%;
    width: 27%;
    padding-left: 3%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: aliceblue
}

#headbar-blank {
    width: 23%;
    height: 100%;
}

#headbar-content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 50%;
    height: 100%;
    padding-right: 2%;
    color: aliceblue;
}
#headbar-content>div {
    display: flex;
    justify-content: center;
    align-items: center;
}

#headbar-content-normal:hover {
    background-color: #367fa9;
    cursor: pointer;
}

#headbar-content-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 90%;
    /* padding: auto 20px; */
    border-radius: 5px;
    border: white solid 1px;
}
#headbar-content-button:hover {
    background-color: #367fa9;
    cursor: pointer;
}
</style>