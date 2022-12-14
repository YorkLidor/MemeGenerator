'use strict'

let gElCanvas
let gCtx

function setCanvas() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    addEventListeners()
    resizeCanvas()
    renderMeme()
}

function renderMeme() {
    const currMeme = getMeme()
    const currImgUrl = getImgUrl(currMeme.imgId)
    drawImg(currImgUrl)
}

function drawImg(imgUrl) {
    const elImg = new Image() //Create a new html img element
    elImg.src = imgUrl //Send a network req to get that image, define the img src
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function drawText() {
    const currMemeLines = getMemeLines()
    currMemeLines.forEach((line)=>{
        gCtx.font = `${line.size}px Arial`
        gCtx.fillText(`${line.txt}`, line.align.x, line.align.x)
        gCtx.fillStyle = `${line.color}`
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onSubmitForm(ev){
    ev.preventDefault()
    const userText = document.getElementById('user-text').value
    setCurrTextLine(userText)
    // addNewText(userText) // שם טקסט חדש ברגע שיש אינפוט מהמשתמש
    renderMeme()
}

function onRaiseTextSize(){
    raiseTextSize()
    renderMeme()
}

function OnDecreaseTextSize(){
    decreaseTextSize()
    renderMeme()

}

function addEventListeners(){
    const colorPicker = document.getElementById("colorPicker")
    colorPicker.addEventListener("input", setNewColor)
}




