<template>
    <div id="page-content">
        <!-- <div id="page-content-user">
            <div id="page-content-user-image"></div>
            <div id="page-content-user-name">
                <div id="name">1225076678</div>
                <div id="state">
                    <div id="state-dot"></div>
                    <div id="state-name">在线</div>
                </div>
            </div>
        </div> -->
        <div id="page-content-action">
            <div id="page-content-action-signin">
                <div @click="signin = !signin" id="signin">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wanggeshitu"></use>
                        </svg>
                    </div>
                    <div style="margin-left: 10px;">签到中心</div>
                </div>
                <div v-if="signin" id="signin-details">
                    <router-link tag="div" to="/user/attendence">签到</router-link>
                    <div>签到记录</div>
                    <div>签到设置</div>
                </div>
            </div>
            <div id="page-content-action-ground">
                <div @click="ground = !ground" id="ground">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-geren"></use>
                        </svg>
                    </div>
                    <div style="margin-left: 10px;">个人中心</div>
                </div>
                <div v-if="ground" id="ground-details">
                    <div>个人信息</div>
                    <router-link to="/user/updateUserInfo" tag="div">修改资料</router-link>
                    <router-link to="/user/repass" tag="div">修改密码</router-link>
                </div>
            </div>
            <div id="page-content-action-netmemory">
                <div @click="netmemory = !netmemory" id="netmemory">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wenjianjia"></use>
                        </svg>
                    </div>
                    <div style="margin-left: 10px;">网上硬盘</div>
                </div>
                <div v-if="netmemory" id="netmemory-details">
                    <div>公共网盘</div>
                    <router-link to="/user/netdisk" tag="div">我的网盘</router-link>
                </div>
            </div>
            <div id="page-content-action-conference">
                <div @click="conference = !conference" id="conference">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiaoliu"></use>
                        </svg>
                    </div>
                    <div style="margin-left: 10px;">会议中心</div>
                </div>
                <div v-if="conference" id="conference-details">
                    <div>申请会议</div>
                    <div>审批状态</div>
                </div>
            </div>
            <div id="page-content-action-myposition">
                <div @click="myposition = !myposition" id="myposition">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shangjiantou"></use>
                        </svg>
                    </div>
                    <div style="margin-left: 10px;">我的职位</div>
                </div>
                <div v-if="myposition" id="myposition-details">
                    <div>职位申请</div>
                    <div>申请职位</div>
                    <div>职位调度</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return  {
            signin: 0,
            ground: 0,
            netmemory: 0,
            conference: 0,
            myposition: 0
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

#page-content {
    overflow-y: scroll;
    scrollbar-track-color: aqua;
    position: relative;
    height: 100%;
    min-height: 100%;
    width: 100%;
    background-color: #3c3c3c;
    overflow-x: hidden;
}

#page-content::-webkit-scrollbar {
    width: 15px;
}

#page-content:hover::-webkit-scrollbar-thumb {
    background-color: #515151;
}
#page-content:hover::-webkit-scrollbar-thumb:hover {
    background-color: #8e8e8e;
}

#page-content-user {
    position: relative;
    display: flex;
    height: 70px;
    width: 100%;
    background-color: #fff;
}

#page-content-user-image {
    height: 100%;
    width: 30%;
    background-color: green;
}
#page-content-user-name {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    width: 70%;
}
#page-content-user-name>div {
    display: flex;
    justify-content: center;
    align-items: center;
}

#state-dot {
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    margin-right: 5px;
}

#signin, #ground, #netmemory, #conference, #myposition {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 20px;
    height: 45px;
    width: 100%;
    color: #b8c7ce;
    cursor: pointer;
}
#signin:hover, #ground:hover, #netmemory:hover, #conference:hover, #myposition:hover {
    color: #ffffff;
    background-color: #1e282c;
}

#signin-details>div, #ground-details>div, #netmemory-details>div, 
#conference-details>div, #myposition-details>div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    color: #b8c7ce;
    height: 45px;
    cursor: pointer;
}
</style>