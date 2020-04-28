const holes = document.querySelectorAll('.hole'),
    moles = document.querySelectorAll('.mole'),
    board = document.querySelector('.score span')

let score = 0,
    timeUp = false,
    lastHole = undefined

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min)

const randomHole = () => {
    const hole = holes[Math.floor(Math.random() * holes.length)]
    if (hole === lastHole) return randomHole()
    lastHole = hole
    return hole
}

const peep = () => {
    const hole = randomHole()
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if (!timeUp) peep()
    }, randomTime(200, 1000))
}

const start = () => {
    board.textContent = 0
    timeUp = false
    score = 0
    peep()
    setTimeout(() => (timeUp = true), 10000)
}

moles.forEach(x => x.addEventListener('click', event => {
    if (!event.isTrusted) return
    score++
    event.target.parentNode.classList.remove('up')
    board.textContent = score
}))
