'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'images/memes/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/memes/2.jpg', keywords: ['cute', 'cat'] },
    { id: 3, url: 'images/memes/3.jpg', keywords: ['funny', 'dog'] }
    ];

function getImages() {
    return gImgs
}