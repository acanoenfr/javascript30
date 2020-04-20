const nav = document.querySelector('#nav')
const modal = document.querySelector('.modal')

let offsetTop = nav.offsetTop
let modalShow = false

window.addEventListener('scroll', event => {
    if (window.scrollY >= offsetTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0
    }
})

function openModal() {
    modalShow = true
    window.scrollTo({ top: true })
    modal.removeAttribute('style')
    document.body.setAttribute('style', 'overflow: hidden;')
}

function closeModal() {
    modalShow = false
    modal.setAttribute('style', 'display: none;')
    document.body.removeAttribute('style')
}

document.querySelector('#nav li#about').addEventListener('click', event => {
    event.preventDefault()
    openModal()
})

window.addEventListener('keydown', event => {
    if (modalShow && event.keyCode ===  27) {
        closeModal()
    }
})

document.querySelector('.modal-close').addEventListener('click', event => {
    event.preventDefault()
    closeModal()
})
