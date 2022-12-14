'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
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

// size = '24', font = 'Arial', text = 'ssssssss', x = 220, y = 100

function drawText() {
    const currMemeLines = getMemeLines()
    console.log('currMemeLines:', currMemeLines)
    currMemeLines.forEach((line)=>{
        gCtx.font = `${line.size}px Arial`
        gCtx.fillText(`${line.txt}`, line.align.x, line.align.x)
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
    setMemeText(userText)
    renderMeme()
    console.log('rendering')
}