<template>
    <div id="headbar">
        <div id="headbar-brand">
            Baacloud
        </div>
        <div id="headbar-hidden">
            ×
        </div>
        <div id="headbar-personal-setting">
            <div  id="headbar-personal-setting-headimage"></div>
            <div id="headbar-personal-setting-name"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#headbar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #3c8dbc;
}

#headbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #ffffff;
    height: 100%;
    width: 17%;
    background-color: #357ca5;
    cursor: pointer;
}

#headbar-hidden {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 3%;
    color: #fff;
    cursor: pointer;
}

#headbar-hidden:hover {
    background-color: #357ca5;
    cursor: pointer;
}
#headbar-personal-setting {
    display: flex;
    position: absolute;
    right: 3%;
    height: 100%;
    width: 15%;
    background-color: #3c8dbc;
}

#headbar-personal-setting:hover {
    background-color: #367fa9;
}

#headbar-personal-setting-headimage {
    height: 100%;
    width: 30%;
}

#headbar-personal-setting-name {
    height: 100%;
    width: 70%;
}

</style>