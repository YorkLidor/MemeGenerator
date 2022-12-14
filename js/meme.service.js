'use strict'

var gMeme = {
    imgId: 1,
    selectedLineIdx: 0,
    url: '"/images/memes/1.jpg"',
    lines: [
        {
            id: makeId(),
            txt: 'I sometimes eat Falafel',
            font: 'Ariel',
            size: 20,
            align: { x: 250, y: 250 },
            color: '#810CA8'
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
    const currImg = gImgs.find((img) => img.id+'' === imgId)
    if (currImg) return currImg
    return null
}

// function addNewText(txt) {
//     gMeme.lines.push(_createLine(txt))
// }

function setCurrTextLine(txt) {
    gMeme.lines[0].txt = txt
}

function setCurrMeme(pickImgId){

    gMeme = {
        imgId: pickImgId,
        selectedLineIdx: 0,
        url: '/images/memes/1.jpg',
        lines: [
            {
                id: pickImgId,
                txt: 'I sometimes eat Falafel',
                font: 'Ariel',
                size: 20,
                align: { x: 250, y: 250 },
                color: '#810CA8'
            }
        ]
    }


}
    

function _createLine(txt = 'Defult Line', font = 'Arial', size = 24, align = { x: 250, y: 250 }, color = '#000000') {
    return {
        id: makeId(),
        txt,
        font,
        size,
        align,
        color,
    }
}