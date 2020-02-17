<template>
    <div id="netdisk">
        <div id="netdisk-headbar"><span style="">{{ name }}</span><span>的网盘</span></div>
        <div id="netdisk-addbutton">
            <div>
                <svg class="icon addfile" aria-hidden="true">
                    <use xlink:href="#icon-addfile"></use>
                </svg>
            </div>
            <div>
                <svg class="icon tianjiawenjian" aria-hidden="true">
                    <use xlink:href="#icon-tianjiawenjian"></use>
                </svg>
            </div>
        </div>
        <div id="netdisk-content">
            
        </div>
    </div>
    
</template>

<script>

export default {
    data () {
        return {
            name: '公共'
        }
    },
    components: {
    }
}
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}

#netdisk {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 95%;
    background-color: #ffffff;
}

#netdisk-headbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    height: 10%;
    border-bottom: 1px solid #eeeeee;
}

#netdisk-content {
    height: 90%;
    overflow-y: scroll;
}

#netdisk-addbutton {
    position: absolute;
    display: flex;
    height: 10%;
    width: 70px;
    right: 0;
    top: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    color: grey;
}

#netdisk-addbutton>div:active {
    color: #000;
}

</style>