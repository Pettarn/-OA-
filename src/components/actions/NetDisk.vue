<template>
    <div id="netdisk">
        <div id="netdisk-headbar"><span style="">{{ name }}</span><span>的网盘</span></div>
        <div id="netdisk-content">

        </div>
    </div>
    
</template>

<script>
import RightArrow from '../icons/RightArrow'
import RightLowerArrow from '../icons/RightLowerArrow'

export default {
    data () {
        return {
            name: '公共'
        }
    },
    components: {
        RightArrow,
        RightLowerArrow
    }
}
</script>

<style scoped>


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

</style>