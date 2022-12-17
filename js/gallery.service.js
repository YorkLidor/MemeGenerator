'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 0, url: '/images/memes/0.png', keywords: ['pepole'] },
    { id: 1, url: './images/memes/1.jpg', keywords: ['pepole'] },
    { id: 2, url: '../images/memes/2.jpg', keywords: ['pet'] },
    { id: 3, url: '/images/memes/3.jpg', keywords: ['pet', 'pepole'] },
    { id: 4, url: 'images/memes/4.jpg', keywords: ['pet'] },
    { id: 5, url: 'images/memes/5.jpg', keywords: ['pepole'] },
    { id: 6, url: 'images/memes/6.jpg', keywords: ['funny', 'pepole'] },
    { id: 7, url: 'images/memes/7.jpg', keywords: ['funny', 'pepole'] },
    { id: 8, url: 'images/memes/8.jpg', keywords: ['funny', 'pepole'] },
    { id: 9, url: 'images/memes/9.jpg', keywords: ['funny', 'pepole'] },
    { id: 10, url: 'images/memes/10.jpg', keywords: ['funny', 'pepole'] },
    { id: 11, url: 'images/memes/11.jpg', keywords: ['funny', 'pepole'] },
    { id: 12, url: 'images/memes/12.jpg', keywords: ['pepole'] },
    { id: 13, url: 'images/memes/13.jpg', keywords: ['pepole'] },
    { id: 14, url: 'images/memes/14.jpg', keywords: ['pepole'] },
    { id: 15, url: 'images/memes/15.jpg', keywords: ['pepole'] },
    { id: 16, url: 'images/memes/16.jpg', keywords: ['pepole'] },
    { id: 17, url: 'images/memes/17.jpg', keywords: ['pepole'] },
    { id: 18, url: 'images/memes/18.jpg', keywords: ['pepole'] },
    ];

function getImages() {
    return gImgs
}

function filterImages(category){
    return gImgs.filter((img)=>{ if(img.keywords.includes(category)){return img} }
    )
}

