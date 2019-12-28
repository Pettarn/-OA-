<template>
    <div id="background">
        <div id="login" :class="{ hidden: isHidden }">
            <div id="login-close" @click="isHidden = !isHidden;">×</div>
            <div id="login-headbar">
                <div id="login-headbar-title">账号登录</div>
            </div>
            <div id="form">
                <div id="email">
                    <label>
                        <div>邮箱</div>
                        <input type="email" />
                    </label>
                </div>
                <div id="password">
                    <label>
                        <div>密码</div>
                        <input type="password" />
                    </label>
                </div>
                <div id="state">
                    <label>
                        <input style="cursor: pointer;" type="checkbox">
                        在此设备上保持登录状态
                    </label>
                </div>
                <div id="button">登录</div>
            </div>
            <div id="login-other">
                <div>忘记密码</div>
                <div>还没注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        
    },
    data () {
        return {
            isHidden: false,
        }
    }
}
</script>

<style scoped>
#background {
    height: 100%;
    width: 100%;
    background-color: #7f7f7f;
}

.hidden {
    top: -400px !important;
}

#login {
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translateX(-50%);
    height: 400px;
    width: 300px;
    background-color: #f1f1f1;
    border-radius: 5px;
    border-radius: 10px;
    transition: top 1s ease;
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
    z-index: 1;
    border-bottom: solid 1px #e5e5e5;
}

#login-close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #cbcbcb;
    font-size: 1.5em;
    z-index: 10;
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