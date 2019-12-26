<template>
    <div>
        <div id="slider">
            <!-- 第一张图 -->
            <div id="slider-single" class="slider">
                <div id="image">
                    <img style="height: 50%; width: 70%;" src="../../assets/slider-1.png"></img>
                </div>
                <div id="pangbai">
                    <div id="pangbai-content">
                        <div id="big-font">
                            网站改版, 全新界面风格
                        </div>
                        <div id="small-font">
                            Baacloud官网已全新改版，如果使用遇到问题，请联系客服反馈。网上存在山寨假冒网站，谨防上当受骗。
                        </div>
                    </div>
                </div>
            </div>
            <!-- 第二张图 -->
            <div id="slider-single" class="slider">
                <div id="image">
                    <img style="height: 50%; width: 70%;" src="../../assets/slider-2.png"></img>
                </div>
                <div id="pangbai">
                    <div id="pangbai-content">
                        <div id="big-font">
                            网站改版, 全新界面风格
                        </div>
                        <div id="small-font">
                            Baacloud官网已全新改版，如果使用遇到问题，请联系客服反馈。网上存在山寨假冒网站，谨防上当受骗。
                        </div>
                    </div>
                </div>
            </div>
            <!-- 第三张图 -->
            <div id="slider-single" class="slider">
                <div id="image">
                    <img style="height: 50%; width: 70%;" src="../../assets/slider-3.png"></img>
                </div>
                <div id="pangbai">
                    <div id="pangbai-content">
                        <div id="big-font">
                            网站改版, 全新界面风格
                        </div>
                        <div id="small-font">
                            Baacloud官网已全新改版，如果使用遇到问题，请联系客服反馈。网上存在山寨假冒网站，谨防上当受骗。
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="three-dot">
            <div id="three-dot-block">
                <div class="dot" @click="show(0)"></div>
                <div class="dot" @click="show(1)"></div>
                <div class="dot" @click="show(2)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            sign: null
        }
    },
    mounted () {
        window.dotArr = document.getElementsByClassName('dot')
        window.eleArr = document.getElementsByClassName('slider')
        dotArr[0].style.setProperty("background-color", "#ffffff", "important")
        dotArr[0].style.setProperty("border", "#689f38 solid 1px", "important")
        eleArr[0].style.setProperty("visibility", "visible", "important")
        this.sign = 0
        window.recycle = setInterval(() => {
            this.show(1)
        }, 2000)
    },
    methods: {
        show (i) {
            dotArr[this.sign].style.setProperty("background-color", "#d8d8d8", "important")
            dotArr[this.sign].style.setProperty("border", "#d8d8d8 solid 1px", "important")
            eleArr[this.sign].style.setProperty("visibility", "hidden", "important")
            this.sign = i
            console.log(i)
            dotArr[i].style.setProperty("background-color", "#ffffff", "important")
            dotArr[i].style.setProperty("border", "#689f38 solid 1px", "important")
            eleArr[i].style.setProperty("visibility", "visible", "important")
            i++
            i = i % 3
            if (typeof recycle !== undefined) {
                clearInterval(recycle)
            }
            window.recycle = setInterval(() => {
                this.show(i)
            }, 2000)
        },
    }
}
</script>

<style scope>
#slider {
    position: relative;
    height: 500px;
    width: 100%;
    /* z-index: 0; */
}

#slider-single {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    visibility: hidden;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    height: 100%;
    width: 100%;
}

#image, #pangbai {
    display: flex;
    justify-content: center;
    align-items: center;
}

#pangbai-content {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 80%;
    height: 30%;
}

#pangbai-content>div {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
}

#big-font {
    font-size: 2.3em;
}

#small-font {
    line-height: 2em;
}


#three-dot {
    position: relative;
    display: flex;
    justify-content: center;
    top: -50px;
    width: 100%;
    height: 100px;
    /* z-index: 1; */
}   

#three-dot-block {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 65px;
    background-color: white;
}

#three-dot-block>div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid 1px #d8d8d8;
    background-color: #d8d8d8;
    cursor: pointer;
}

#three-dot-block>div:active {
    border: solid 1px #689f38;
}

.black {
    background-color: black !important;
}

.display {
    visibility: visible !important;
}
</style>