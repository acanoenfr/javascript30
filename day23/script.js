const bubbles = document.querySelectorAll('#app .bubble')

bubbles.forEach(x => x.addEventListener('dragend', event => {
    event.preventDefault()
    event.target.style.position = 'absolute'
    event.target.style.left = `${event.x}px`
    event.target.style.top = `${event.y}px`
}))

function resetBubbles() {
    bubbles.forEach(x => (x.style = null))
}
