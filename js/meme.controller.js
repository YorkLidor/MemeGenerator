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
    const currImgId = currMeme.imgId
    const currImgUrl = getImgUrl(currImgId)
    drawImg(currImgUrl)
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function drawImg(imgUrl='images/memes/5.jpg') {
    const elImg = new Image() //Create a new html img element
    elImg.src = imgUrl //Send a network req to get that image, define the img src
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function drawText(size = '24', font = 'Arial', text = 'Place Text Here', x = 220, y = 100) {
    gCtx.font = `${size}px ${font}`
    gCtx.fillText(`${text}`, x, y)
}

