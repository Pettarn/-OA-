<template>
    <div id="update">
        <div id="update-left">
            <div id="update-title">
                <div id="update-title-bigger">信息更新</div>
                <div id="update-title-smaller">Profile Update</div>
            </div>
            <div id="update-userInfo">
                <div id="update-userInfo-topbar"></div>
                <div>
                    <input type="text" placeholder="用户账号">
                </div>
                <div>
                    <input type="text" placeholder="用户名称">
                </div>
                <div id="submit">
                    <div id="submit-button">修改</div>
                </div>
            </div>
        </div>
        <div id="update-right">
            <div id="update-title">
                <div id="update-title-bigger">头像更新</div>
                <div id="update-title-smaller">Image Update</div>
            </div>
            <div id="update-image">
                <div id="update-userInfo-topbar"></div>
                
                <div id="upload">
                    <div>
                        <img src="" id="preview" alt="Image preview..." />
                    </div>
                    <div>
                        <input type="file" @change="show" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created () {
        console.log('bug')
    },
    methods: {
        show () {
            let preview = document.getElementById('preview')
            let file = document.querySelector("input[type='file']").files[0]
            let fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.addEventListener('load', function () {
                preview.src = fileReader.result
                console.log(preview.src)
            }, false)
        }
    }
}
</script>

<style scoped>
#update {
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
    /* background-color: #000; */
}

#update-left {
    margin-left: 20px;
    width: 40%;
    height: auto;
}
#update-right {
    margin-left: 20px;
    width: 40%;
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

#update-image {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
    padding-top: 20px;
    border-radius: 5px;
}
#preview {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}


#update-userInfo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding-top: 20px;
    border-radius: 5px;
    overflow: hidden;
}
#update-userInfo>div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    /* height: 40px; */
    margin-bottom: 15px;
    /* border: 1px solid #d2d6de; */
    overflow: hidden;
}
#update-userInfo>div>input {
    outline: none;
    border: solid 1px #d2d6de;
    width: 95%;
    /* height: 80%; */
    height: 32px;
    border-radius: 3px;
    padding-left: 20px;
}

#update-userInfo>div>textarea {
    outline: none;
    border: solid 1px #d2d6de;
    width: 95%;
    height: 100px;
    border-radius: 3px;
    padding-left: 20px;
}

#update-userInfo>div>input:focus {
    border: solid 1px #3c8dbc;
}

#update-userInfo-topbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 5px !important;
    background-color: #3c8dbc;
}

#submit {
    position: relative;
    display: flex !important;
    height: 60px;
    width: 100%;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: start !important;
}

#upload {
    position: relative;
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
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
    margin-left: 10px;
}

#submit-button:hover {
    background-color: #367fa9;
}
</style>