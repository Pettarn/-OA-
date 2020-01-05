<template>
    <div id="update">
        <div id="update-title">
            <div id="update-title-bigger">更换密码</div>
            <div id="update-title-smaller">Change password</div>
        </div>
        <div id="update-password">
            <div id="update-password-topbar"></div>
            <div>
                <input type="password" placeholder="当前密码(必填)">
            </div>
            <div>
                <input type="password" placeholder="新密码">
            </div>
            <div>
                <input type="password" placeholder="确认密码">
            </div>
            <div id="submit">
                <div id="submit-button">修改</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#update {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    /* background-color: #000; */
}

#update-title {
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    /* background-color: red; */
    /* padding-left: 20px; */

}

#update-title-bigger {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    height: 100%;
    font-size: 1.7em;
}
#update-title-smaller {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    height: 100%;
    color: #777777;
    font-weight: 100;
    font-size: 1em;
    margin-left: 10px;
}

#update-password {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    background-color: #ffffff;
    padding-top: 20px;
    border-radius: 5px;
    overflow: hidden;
}
#update-password>div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 40px;
    margin-bottom: 15px;
    /* border: 1px solid #d2d6de; */
    overflow: hidden;
}
#update-password>div>input {
    outline: none;
    border: solid 1px #d2d6de;
    width: 95%;
    height: 80%;
    border-radius: 3px;
    padding-left: 20px;
}

#update-password>div>input:focus {
    border: solid 1px #3c8dbc;
}

#update-password-topbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 5px !important;
    background-color: #3c8dbc;
}

#submit {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: start !important;
    width: 100%;
    height: 60px;
    /* background-color: #000; */
}

#submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #3c8dbc;
    width: 74px;
    height: 40px;
    cursor: pointer;
    color: white;
}

#submit-button:hover {
    background-color: #367fa9;
}
</style>