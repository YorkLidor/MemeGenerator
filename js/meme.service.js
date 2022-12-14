'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'images/memes/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: 'images/memes/2.jpg', keywords: ['funny', 'cat'] }];

var gMeme = {
    imgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            font: 'Ariel',
            size: 20,
            align: {x: 250, y:250},
            color: 'red'
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
    const currImg = gImgs.find((img) => img.id === imgId)
    if (currImg) return currImg
    return null
}

function setMemeText(txt) {
    gMeme.lines.push(_createLine(txt))
}

function _createLine(txt='Defult Line',font ='Arial', size = 24, align = { x: 250, y: 250 }, color = 'red') {
    return {
        txt,
        font,
        size,
        align,
        color,
    }
}