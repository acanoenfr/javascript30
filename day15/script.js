const app = document.getElementById('app')
const h1 = document.querySelector('#app h1')

let walk = 500

const setTextShadow = event => {
    let { offsetWidth: width, offsetHeight: height } = app
    let { offsetX: x, offsetY: y } = event
    if (this !== event.target) {
        x += event.target.offsetLeft
        y += event.target.offsetTop
    }
    let xWalk = Math.round((x / width * walk) - (walk / 2))
    let yWalk = Math.round((y / height * walk) - (walk / 2))
    h1.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, .7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, .7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, .7)`
}

app.addEventListener('mousemove', setTextShadow)
