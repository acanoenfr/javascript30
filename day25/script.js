const img = document.querySelector('.image')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

setInterval(function() {
    img.src = 'https://i.picsum.photos/id/' + getRandomInt(1000) + '/1920/1080.jpg'
}, 3000)
