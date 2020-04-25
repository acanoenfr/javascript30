const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d')
const img = new Image()

const blur = document.querySelector('#blur')
const grayscale = document.querySelector('#grayscale')
const opacity = document.querySelector('#opacity')
const brightness = document.querySelector('#brightness')
const saturate = document.querySelector('#saturate')
const sepia = document.querySelector('#sepia')

img.onload = () => {
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
}

img.src = 'https://i.picsum.photos/id/1040/800/600.jpg'

const onChange = () => {
    if (blur.value == 'undefined') blur.value = 0
    if (grayscale.value == 'undefined') grayscale.value = 0
    if (opacity.value == 'undefined') opacity.value = 1
    if (brightness.value == 'undefined') brightness.value = 100
    if (saturate.value == 'undefined') saturate.value = 100
    if (sepia.value == 'undefined') sepia.value = 0
    canvas.style.filter = `blur(${blur.value}px)
        grayscale(${grayscale.value}%)
        opacity(${opacity.value})
        brightness(${brightness.value}%)
        saturate(${saturate.value}%)
        sepia(${sepia.value}%)`
}
