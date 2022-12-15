'use strict'

let gMeme = {
    imgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your Text Here',
            size: 30,
            align: 'center',
            color: '#000000',
            font: 'Ariel',
            pos: null,
        },
        // {
        //     txt: 'testttt',
        //     font: 'Ariel',
        //     size: 20,
        //     align: { x: 400, y: 400 },
        //     color: '#FB2576'
        // }
    ]
}

function setNewLine() {
    //limited to 3 text inputs
    if (gMeme.lines.length === 3) return;
    gMeme.lines.push({
        // isSticker: false,
        txt: 'Enter your text here...',
        size: 30,
        align: 'center',
        color: '#000000',
        font: 'Ariel',
        pos: null,
        // isDragged: false
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

function addTextLine(){
    gMeme.lines.push(_createLine())
    gMeme.selectedLineIdx++
}

function deleteLine(){
    if(gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    gMeme.selectedLineIdx--
}

function moveLineUpOrDown(directions){
    if(directions === 1){
        gMeme.lines[gMeme.selectedLineIdx].pos.y -=2
    } else {
        gMeme.lines[gMeme.selectedLineIdx].pos.y +=2
    }
}

function alignLine(directions){
    if(directions === -1){
        gMeme.lines[gMeme.selectedLineIdx].pos.x = 100
    } else if(directions === 0){
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width/2
    } else {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width-100
    }
}

