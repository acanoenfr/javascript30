const items = document.querySelector('.items')

let startX, scrollLeft, isDown = false

items.addEventListener('mousedown', event => {
    isDown = true
    items.classList.add('active')
    startX = event.pageX - items.offsetLeft
    scrollLeft = items.scrollLeft
})

items.addEventListener('mouseup', () => {
    isDown = false
    items.classList.remove('active')
})

items.addEventListener('mouseleave', () => {
    isDown = false
    items.classList.remove('active')
})

items.addEventListener('mousemove', event => {
    event.preventDefault()
    if (!isDown) return
    const x = event.pageX - items.offsetLeft, walk = (x - startX) * 3
    items.scrollLeft = scrollLeft - walk
})
