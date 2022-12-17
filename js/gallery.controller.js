'use strict'

function renderGallery(filterdGallery){
    var images
    if(filterdGallery){
        images = filterdGallery
        console.log('images:', images)
    } else {
        images = getImages()
    }
    var strHtmls = images.map(img => `
    <img onclick="onImgPick('${img.id}')" class="gallery-img" src="${img.url}">`
    )
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('')
}

function onImgPick(imgId){
    document.querySelector('.gallery-container').classList.add('display-none')
    document.querySelector('.main-layout-footer').classList.add('display-none')
    document.querySelector('.card').classList.remove('display-none')
    console.log('imgId:', imgId)
    if(imgId === '0'){
        const randomImg = getRandomIntInclusive(1,18) +''
        setCurrMeme(randomImg)
        setCanvas()
    } else {
        setCurrMeme(imgId)
        setCanvas()
    }
}

function onFilterImages(category){
    const filterdGallery = filterImages(category)
    renderGallery(filterdGallery)
}