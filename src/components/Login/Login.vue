<template>
    <div id="background">
        <div id="opacity"></div>
        <div id="login" :class="{ hidden: isHidden }">
            <div id="login-close" @click="hidden">×</div>
            <div id="login-headbar">
                <div id="login-headbar-title">账号登录</div>
            </div>
            <div id="form">
                <div id="email">
                    <label>
                        <div>账号</div>
                        <input type="text" v-model="user_no" />
                    </label>
                </div>
                <div id="password">
                    <label>
                        <div>密码</div>
                        <input type="password" v-model="user_password" />
                    </label>
                </div>
                <div id="state">
                    <label>
                        <input style="cursor: pointer;" type="checkbox">
                        在此设备上保持登录状态
                    </label>
                </div>
                <div id="button" @click="submit">登录</div>
            </div>
            <div id="login-other">
                <div>忘记密码</div>
                <div @click="register">还没注册</div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/user'

export default {
    created () {
        setTimeout(() => {
            this.isHidden = false
        }, 0)
        if (typeof recycle !== undefined) {
            clearInterval(window.recycle)
        }
    },
    data () {
        return {
            isHidden: true,
            user_no: null,
            user_password: null,
        }
    },
    methods: {
        hidden () {
            this.isHidden = true
            this.$router.push('/')
        },
        register () {
            this.$router.push('/register')
        },
        submit () {
            let parameter = {
                user_no: this.user_no,
                user_password: this.user_password
            }
            login(parameter)
            .then(function (data) {
                console.log(data)
            })
        }
    }
}
</script>

<style scoped>
#background {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
}

#opacity {
    height: 100%;
    width: 100%;
    background-color: #1e1e1e;
    opacity: 0.5;
}

.hidden {
    top: -460px !important;
    overflow: hidden;
}

#login {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 400px;
    width: 300px;
    background-color: #f1f1f1;
    border-radius: 5px;
    border-radius: 10px;
    transition: top 1s ease;
    opacity: 1;
}

#login-headbar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    color: #3c9bd3;
    font-size: 1.5em;
    z-index: 11;
    border-bottom: solid 1px #e5e5e5;
}

#login-close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #cbcbcb;
    font-size: 1.5em;
    z-index: 12;
}
#login-close:hover {
    color: #7f7f7f;
    cursor: pointer;
}

#form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 290px;
    border-bottom: solid 1px #e5e5e5;
}

#email, #password {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #cccccc;
    background-color: #fff;
    margin-top: 25px;
    color: #888888;
}

#state {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    margin-top: 25px;
    color: #888888;
}

label {
    display: flex;
    align-items: center;
}

input {
    margin-left: 10px;
    border: 1px #ffffff solid;
    outline: none;
}

#button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    background-color: #3c8dbc;
    color: #ffffff;
    margin-top: 25px;
    border-radius: 3px;
    cursor: pointer;
}
#button:hover {
    background-color: #367fa9;
}

#login-other {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 48px;
    color: #ababab;
    font-size: .8em;
}
#login-other>div {
    border-bottom: solid 1px #ffffff;
}
#login-other>div:hover {
    border-bottom: solid 1px #999999;
    cursor: pointer;
}
</style>