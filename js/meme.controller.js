'use strict'

let gElCanvas
let gCtx

function setCanvas() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    addEventListeners()
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
    currMemeLines.forEach((line, idx) => {
        gCtx.font = `${line.size}px Arial`
        gCtx.textAlign = line.align
        gCtx.fillStyle = line.color 

        // if first 3 lines
        if (!line.pos) {
            //centers on x axis
            var x = gElCanvas.width / 2
            if (idx === 0) {
            //first line
                var y = 40
            } else if (idx === 1) {
            //second line
                y = gElCanvas.height - 40
            } else {
            //third line
                y = gElCanvas.height / 2
            }
            line.pos = { x: x, y: y }
        }
        gCtx.fillText(line.txt, line.pos.x, line.pos.y, gElCanvas.width - 20)

    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onSubmitForm(ev) {
    ev.preventDefault()
    const userText = document.getElementById('user-text').value
    setCurrTextLine(userText)
    // addNewText(userText) // שם טקסט חדש ברגע שיש אינפוט מהמשתמש
    renderMeme()
}

function onRaiseTextSize() {
    raiseTextSize()
    renderMeme()
}

function OnDecreaseTextSize() {
    decreaseTextSize()
    renderMeme()

}

function addEventListeners() {
    const colorPicker = document.getElementById("colorPicker")
    colorPicker.addEventListener("input", setNewColor)

    const userText = document.getElementById("user-text")
    userText.addEventListener("input", setTextBox)
}

function onNextText() {
    //Move to next meme line
    setNextText()

    // Match text box to current line
    const currLine = getCurrTextLine()
    document.getElementById("user-text").value = currLine

    // Match color picker to current color
    const currColor = getCurrColorLine()
    document.getElementById("colorPicker").value = currColor

    renderMeme()
}

function onAddTextLine() {
    document.getElementById('user-text').value = ''
    setNewLine()
    renderMeme()
}

function onDeletLine(){
    deleteLine()
    renderMeme()
}

function onMoveLineUpOrDown(directions){
    moveLineUpOrDown(directions)
    renderMeme()
}

function onAlignLine(directions){
    alignLine(directions)
    renderMeme()
}






