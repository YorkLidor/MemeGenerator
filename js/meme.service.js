'use strict'

let gMeme = {
    imgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your Text Here',
            font: 'Ariel',
            size: 30,
            align: { x: 250, y: 250 },
            color: '#FB2576'
        },
        {
            txt: 'testttt',
            font: 'Ariel',
            size: 20,
            align: { x: 400, y: 400 },
            color: '#FB2576'
        }
    ]
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

// function addNewText(txt) {
//     gMeme.lines.push(_createLine(txt))
// }

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

function setNextText() {
    if (gMeme.selectedLineIdx >=  gMeme.lines.length-1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
}

function getCurrTextLine(){
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getCurrColorLine(){
    return gMeme.lines[gMeme.selectedLineIdx].color
}

// function _createLine(txt = 'Defult Line', font = 'Arial', size = 24, align = { x: 250, y: 250 }, color = '#000000') {
//     return {
//         txt,
//         font,
//         size,
//         align,
//         color,
//     }
// }