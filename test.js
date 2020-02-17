let file = document.querySelector('input[type=file]').files[0]
let preview = document.querySelector('img')

let fileReader = new FileReader()
fileReader.readAsDataURL(file)
fileReader.onload = function () {
    preview.src = fileReader.result
}

