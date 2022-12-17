'use strict'

function onInit(){
    renderGallery()
}

function onHeaderGalleryClick(){
    document.querySelector('.gallery-container').classList.remove('display-none')
    document.querySelector('.main-layout-footer').classList.remove('display-none')
    document.querySelector('.card').classList.add('display-none')
    renderGallery()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}
