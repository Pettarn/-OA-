<template>
    <div id="frame">
        <!-- 聊天框的头部 -->
        <div id="frame-headbar">
            <!-- 对方头像 -->
            <div id="frame-headbar-image">
                <img src="../../assets/logo.png" width="80%" height="80%"/>
            </div>
            <!-- 对方名字 -->
            <div id="frame-headbar-name">213</div>
            <!-- 三个按钮 -->
            <div id="frame-headbar-buttongroup">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zuixiaohua"></use>
                    </svg>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon--"></use>
                    </svg>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
            </div>
        </div>
        <!-- 聊天内容 -->
        <div id="frame-content">

        </div>
        <!-- 聊天文本编辑栏 -->
        <div id="frame-setfont">
            <div class="frame-setfont-buttons">
                <svg class="chaticon" aria-hidden="true">
                    <use xlink:href="#icon-biaoqing"></use>
                </svg>
            </div>
            <div id="frame-setfont-post">
                发送
            </div>
        </div>
        <!-- 将要发送的内容 -->
        <div id="frame-willpost">
            <textarea id="frame-willpost-content"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    
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
.chaticon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#frame {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 500px;
    background-color: #e1e1e1;
    box-shadow: 1px 1px 20px #888888;
}

#frame-headbar {
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #f8f8f8;
}

#frame-headbar-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    background-color: #000;
}

#frame-headbar-name {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 1.3em;
}

#frame-headbar-buttongroup {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 100px;
}
#frame-headbar-buttongroup>div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
#frame-headbar-buttongroup>div:hover {
    background-color: #dadcdf;
}

#frame-content {
    overflow-y: scroll;
    background-color: #888;
    height: 320px;
    width: 100%;
}
#frame-content::-webkit-scrollbar {
    width: 15px;
}
#frame-content:hover::-webkit-scrollbar-thumb {
    background-color: #515151;
}
#frame-content:hover::-webkit-scrollbar-thumb:hover {
    background-color: #8e8e8e;
}

#frame-setfont {
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    background-color: #ffffff;
    border-bottom: solid .5px;
}
.frame-setfont-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    cursor: pointer;
}
.frame-setfont-buttons:hover {
    background-color: #dadcdf;
}

#frame-setfont-post {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0px;
    margin-right: 1px;
    margin-bottom: 1px;
    width: 90px;
    height: 26px;
    border-radius: 2px;
    font-size: 1em;
    cursor: pointer;
    background-color: #65b677;
    color: #ffffff;
}
#frame-setfont-post:hover {
    background-color: rgb(41, 197, 2);
}

#frame-willpost {
    height: 90px;
    width: 100%;
}
#frame-willpost-content::-webkit-scrollbar {
    width: 15px;
    cursor: pointer;
}
#frame-willpost-content:hover::-webkit-scrollbar-thumb {
    background-color: #515151;
}
#frame-willpost-content:hover::-webkit-scrollbar-thumb:hover {
    background-color: #8e8e8e;
}
#frame-willpost-content {
    width: 100%;
    height: 100%;
    padding: 0%;
    border: 0px;
    display: block;
    resize: none !important;
}

</style>