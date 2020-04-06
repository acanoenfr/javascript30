const app = document.querySelector('#app')
const Wlow = window.innerWidth / 2 - 200
const Whigh = window.innerWidth / 2 + 200
const Hlow = window.innerHeight / 2 - 200
const Hhigh = window.innerHeight / 2 + 200

let square = document.createElement('div')
square.style = `border: 4px solid #212121;
margin: ${Hlow}px ${Wlow}px;
padding: 200px;`
app.appendChild(square)

window.addEventListener('mousemove', event => {
    if (IsCursorInMiddle(event)) {
        app.style = 'background-color: #4CAF50;'
    } else {
        app.style = 'background-color: #9E9E9E;'
    }
})

function IsCursorInMiddle(mouseEvent) {
    return event.x >= Wlow && event.x <= Whigh && event.y >= Hlow && event.y <= Hhigh
}
