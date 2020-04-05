const konamiCode = '38384040373937396665'
const sequence = (new Array(10)).fill(null)

window.addEventListener('keydown', event => {
    sequence.shift()
    sequence.push(event.keyCode)
    if (sequence.join('') == konamiCode) {
        document.querySelector('body').setAttribute('style', 'background-color: #9C27B0;')
        document.querySelector('#title').innerHTML = 'Paramètres secrets'
    } else {
        document.querySelector('body').setAttribute('style', null)
        document.querySelector('#title').innerHTML = 'Konami Code'
    }
})
