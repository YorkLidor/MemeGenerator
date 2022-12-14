'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2} 

var gImgs = [{id: 1, url: 'images/memes/1.jpg', keywords: ['funny', 'cat']},{id: 2, url: 'images/memes/2.jpg', keywords: ['funny', 'cat']}]; 

var gMeme = { 
    imgId: 2, 
    selectedLineIdx: 0, 
    lines: [ 
        { 
        txt: 'I sometimes eat Falafel', 
        size: 20, 
        align: 'left', 
        color: 'red'
        } 
    ] 
}


function getMeme(){
    return gMeme
}

function getImgUrl(imgId){
   const currImg = _getImgById(imgId)
   return currImg.url
}

function _getImgById(imgId){
    const currImg = gImgs.find((img)=> img.id === imgId)
    if(currImg) return currImg
    return null
}
