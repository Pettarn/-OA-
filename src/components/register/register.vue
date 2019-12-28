<template>
    <div id="register">
        <div id="register-title">
            <div>账号注册</div>
        </div>
        <div id="register-account">
            <div id="register-item-title">
                <div>账号名称</div>
            </div>
            <div id="form">
                <input type="text" placeholder="不支持特殊字符">
            </div>
        </div>
        <div id="register-email">
            <div id="register-item-title">
                <div>电子邮箱</div>
            </div>
            <div id="form">
                <input type="text" placeholder="填写常用邮箱以免遗漏通知">
            </div>
        </div>
        <div id="register-password">
            <div id="register-item-title">
                <div>设置密码</div>
            </div>
            <div id="form">
                <input type="text" placeholder="设置账号密码">
            </div>
        </div>
        <div id="register-passwordagain">
            <div id="register-item-title">
                <div>重复密码</div>
            </div>
            <div id="form">
                <input type="text" placeholder="重新输入账号密码">
            </div>
        </div>
        <div id="register-getcheckword">
            <div>获取验证码</div>
        </div>
        <div id="register-emailcheck">
            <div id="register-item-title">
                <div>邮箱验证</div>
            </div>
            <div id="form">
                <input type="text" placeholder="输入邮箱受到的验证码">
            </div>
        </div>
        <div id="register-contract">
            我已阅读并同意遵守
            <div id="link-to-contract">
                服务条款
            </div>
        </div>
        <div id="register-submit">
            <div>注册账号</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#register {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
}

#register-title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    color: #3c8dbc;
    font-size: 2em;
}

#register-account, #register-email, #register-password, #register-passwordagain,
#register-emailcheck {
    position: relative;
    display: grid;
    width: 80%;
    grid-template-columns: 27% 73%;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
}

#register-getcheckword, #register-submit {
    position: relative;
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #3c8dbc;
    color: #ffffff;
    cursor: pointer;
}

#register-contract {
    position: relative;
    display: flex;
    width: 80%;
    justify-content: start;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    /* padding-left: 30px; */
    color: #888888;
    font-size: 0.8em;
}

#register-getcheckword:hover, #register-submit:hover {
    background-color: #7dc37d;
}

#register-item-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9e9e9e;
    color: #ffffff;
    border-radius: 5px 0 0 5px;
    cursor: default;
}

#form {
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid #cccccc;
    border-left: 0px;
    border-radius: 0 5px 5px 0;
    padding-left: 20px;
}
#form:hover {
    border: 1px solid #888888;
    border-left: 0px;
}

input {
    border: 1px #ffffff solid;
    outline: #ffffff;
}

#link-to-contract {
    color: #3c8dbc;
    margin-left: 5px;
    cursor: pointer;
    border: solid 1px #ffffff;
}
#link-to-contract:hover {
    border-bottom: 1px solid #3c8dbc;
}
</style>