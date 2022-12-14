'use strict'

function onInit(){
    renderGallery()
}

function renderGallery(){
    const images = getImages()
    var strHtmls = images.map(img => `
    <img onclick="onImgPick('${img.id}')" class="gallery-img" src="${img.url}" alt="">`
    )
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('')
}

function onImgPick(imgId){
    setCurrMeme(imgId)
    setCanvas()
}