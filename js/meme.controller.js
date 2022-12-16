'use strict'

let gElCanvas
let gCtx
let gStartPos

function setCanvas() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.style.cursor = 'grab'
    resizeCanvas()
    addEventListeners()
    addGrabAndDropListeners()
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
        frameCurrLine()
    }
}

function drawText() {
    const currMemeLines = getMemeLines()
    currMemeLines.forEach((line, idx) => {
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.textAlign = line.align
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = '#000000'
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
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)

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
    setNextText()
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

function onDeletLine() {
    deleteLine()
    renderMeme()
}

function onMoveLineUpOrDown(directions) {
    moveLineUpOrDown(directions)
    renderMeme()
}

function onAlignLine(directions) {
    alignLine(directions)
    renderMeme()
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format
    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//GRAB AND DROP SECTION//
function addGrabAndDropListeners() {
    addMouseListeners()
    addTouchListeners()

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    //Get position of the click {x: , y: }
    const pos = getEvPos(ev)
    
    //Check if clicked on line
    if (!isLineClicked(pos, gCtx)) return
    
    //Set the clicked line -> (isDrag = true)
    setLineDrag(true)
    
    //Save the start pos
    gStartPos = pos
    
    
    gElCanvas.style.cursor = 'grabbing'
}

function onMove(ev) {
    //Allways check if there is a dragged line 
    const draggedLineIdx = getDragedLineIdx()
    if (draggedLineIdx === -1) return

    const pos = getEvPos(ev)

    //Calc the diff of move 
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y

    //Update x&y of the dragged line 
    moveDraggedLine(dx, dy, draggedLineIdx)

    //Save the last pos
    gStartPos = pos

    //Render canvas after every move!
    renderMeme()
}

function onUp() {
    setLineDrag(false)
    gElCanvas.style.cursor = 'grab'
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

function frameCurrLine() {
    const currLine = getCurrLine()
    const metrics = gCtx.measureText(currLine.txt)
    const txtWidth = metrics.width
    const txtHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
    gCtx.strokeStyle = 'red'
    gCtx.strokeRect(
        //X
        currLine.pos.x - txtWidth / 1.95,
        //Y    
        currLine.pos.y - txtHeight / 1.15,
        //Width
        txtWidth + 8,
        //Height
        txtHeight + 5)
}










