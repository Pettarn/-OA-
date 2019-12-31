<template>
  <div id="attend">
    <div id="attend-image">
        <div>
            <video id="video" width="400px" height="400px" autoplay="autoplay"></video>
        </div>
        <div>
            <canvas id="canvas" height="400px" width="400px"></canvas>
        </div>
    </div>
    <div id="attend-button">
        <input type="button" value="开启" @click="getMedia">
        <input type="button" value="拍照" @click="takePhoto">
    </div>
  </div>
</template>

<script>
// import { Base64 } from 'js-base64'

export default {
    methods: {
        getMedia () {
            let constraints = {
                //参数
                video: {width: 400, height: 400},
                audio: true
            }
            //获得video摄像头区域
            let video = document.getElementById("video");
            //返回的Promise对象
            let promise = navigator.mediaDevices.getUserMedia(constraints);
           //then()异步，调用MediaStream对象作为参数
            promise.then(function (MediaStream) {
                video.srcObject = MediaStream;
                video.play();
            });
        },
        takePhoto () {
            //获得Canvas对象
            let video = document.getElementById("video");
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext('2d');
            //绘图
            ctx.drawImage(video, 0, 0, 400, 400);
            canvas.toBlob(function (blob) {
                let fileReader = new FileReader()
                fileReader.readAsDataURL(blob)
                fileReader.onload = function () {
                    let code = this.result
                    console.log(code)
                }
            }, 'image/png')
        }
    }
};
</script>

<style scoped>
#attend {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

#attend-image {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 400px;
    width: 800px;
}

#attend-button {
    margin-top: 20px;
}

#video {
    border: 1px solid green;
}

</style>