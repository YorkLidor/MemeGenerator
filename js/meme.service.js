'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
const MEME_KEY = 'memeDB'

var gSavedMems = []

var gMeme = {
    imgId: null,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your first text...',
            size: 30,
            align: 'center',
            color: '#ffffff',
            font: 'Impact',
            pos: null,
            isDrag: false
        },
    ]
}

function setNewLine(txtOrSticker = 'Enter your text here...') {
    gMeme.lines.push({
        txt: txtOrSticker,
        size: 30,
        align: 'center',
        color: '#ffffff',
        font: 'Impact',
        pos: null,
        isDrag: false,
    })
    gMeme.selectedLineIdx++
}

function getMeme() {
    return gMeme
}

function getMemeLines() {
    return gMeme.lines
}

function getImgUrl(imgId) {
    const currImg = getImgById(imgId)
    return currImg.url
}

function getImgById(imgId) {
    const currImg = gImgs.find((img) => img.id + '' === imgId)
    if (currImg) return currImg
    return null
}

function setCurrTextLine(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setCurrMeme(pickImgId) {
    gMeme.imgId = pickImgId
}

function raiseTextSize() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseTextSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--

}

function setNewColor() {
    gMeme.lines[gMeme.selectedLineIdx].color = this.value
    renderMeme()
}

function setTextBox() {
    gMeme.lines[gMeme.selectedLineIdx].txt = this.value
    renderMeme()
}

function setFontBox() {
    gMeme.lines[gMeme.selectedLineIdx].font = this.value
    renderMeme()
}

function setNextText() {
    if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
}

function getCurrTextLine() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}
function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getCurrColorLine() {
    return gMeme.lines[gMeme.selectedLineIdx].color
}

function addTextLine() {
    gMeme.lines.push(_createLine())
    gMeme.selectedLineIdx++
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
}

function moveLineUpOrDown(directions) {
    if (directions === 1) {
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 2
    } else {
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 2
    }
}

function alignLine(directions) {
    if (directions === -1) {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = 100
    } else if (directions === 0) {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 2
    } else {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width - 100
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GRAB AND DROP SECTION//
function getEvPos(ev) {
    //Gets the offset pos, the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    //Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()

        //Gets the first touch point
        ev = ev.changedTouches[0]

        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function isLineClicked(clickedPos, ctxObj) {

    const clickedLine = gMeme.lines.find((line, idx) => {
        //Returns object that contains the width of the text in the current font
        const metrics = ctxObj.measureText(line.txt)
        const textWidth = metrics.width

        //Check if clicked on the X axis of the line 
        const isOnXaxis = clickedPos.x >= line.pos.x - (textWidth / 2) - 10 && clickedPos.x <= line.pos.x + (textWidth / 2) + 10

        //Check if also clicked on the Y axis of the line
        if (isOnXaxis && clickedPos.y >= line.pos.y - line.size && clickedPos.y <= line.pos.y + line.size - (line.size / 2)) {
            gMeme.selectedLineIdx = idx
            return true
        }
    })
    if (clickedLine) return true
    return false
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function getDragedLineIdx() {
    return gMeme.lines.findIndex((line) => line.isDrag === true)
}

function moveDraggedLine(x, y, idx) {
    gMeme.lines[idx].pos.x += x
    gMeme.lines[idx].pos.y += y
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function memeSave(){
//     gSavedMems.push(gMeme)
//     saveToStorage(MEME_KEY, gSavedMems)
// }


