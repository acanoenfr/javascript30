const nav = document.querySelector('#nav')

let offsetTop = nav.offsetTop

window.addEventListener('scroll', event => {
    if (window.scrollY >= offsetTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0
    }
})
