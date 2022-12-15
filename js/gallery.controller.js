'use strict'

function renderGallery(){
    const images = getImages()
    var strHtmls = images.map(img => `
    <img onclick="onImgPick('${img.id}')" class="gallery-img" src="${img.url}" alt="">`
    )
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('')
}

function onImgPick(imgId){
    document.querySelector('.gallery-container').classList.add('display-none')
    document.querySelector('.footer').classList.add('display-none')
    document.querySelector('.card').classList.remove('display-none')
    setCurrMeme(imgId)
    setCanvas()
}
