'use strict'

function onInit(){
    renderGallery()
}

function onHeaderGalleryClick(){
    document.querySelector('.gallery-container').classList.remove('display-none')
    document.querySelector('.footer').classList.remove('display-none')
    document.querySelector('.card').classList.add('display-none')
}
