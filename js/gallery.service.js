'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'images/memes/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/memes/2.jpg', keywords: ['cute', 'cat'] },
    { id: 3, url: 'images/memes/3.jpg', keywords: ['funny', 'dog'] },
    { id: 4, url: 'images/memes/4.jpg', keywords: ['funny', 'dog'] },
    { id: 5, url: 'images/memes/5.jpg', keywords: ['funny', 'dog'] },
    { id: 6, url: 'images/memes/6.jpg', keywords: ['funny', 'dog'] },
    { id: 7, url: 'images/memes/7.jpg', keywords: ['funny', 'dog'] },
    { id: 8, url: 'images/memes/8.jpg', keywords: ['funny', 'dog'] },
    { id: 9, url: 'images/memes/9.jpg', keywords: ['funny', 'dog'] },
    { id: 10, url: 'images/memes/10.jpg', keywords: ['funny', 'dog'] },
    { id: 11, url: 'images/memes/11.jpg', keywords: ['funny', 'dog'] },
    { id: 12, url: 'images/memes/12.jpg', keywords: ['funny', 'dog'] },
    { id: 13, url: 'images/memes/13.jpg', keywords: ['funny', 'dog'] },
    { id: 14, url: 'images/memes/14.jpg', keywords: ['funny', 'dog'] },
    { id: 15, url: 'images/memes/15.jpg', keywords: ['funny', 'dog'] },
    { id: 16, url: 'images/memes/16.jpg', keywords: ['funny', 'dog'] },
    { id: 17, url: 'images/memes/17.jpg', keywords: ['funny', 'dog'] },
    { id: 18, url: 'images/memes/18.jpg', keywords: ['funny', 'dog'] },
    ];

function getImages() {
    return gImgs
}