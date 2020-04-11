const nav = document.querySelector('#nav')
const img = document.querySelectorAll('.slide-in')

let offsetTop = nav.offsetTop

window.addEventListener('scroll', event => {
    checkSlide(event)
    if (window.scrollY >= offsetTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0
    }
})

const debounce = (func, wait = 20, immediate = true) => {
    let timeout
    return (...args) => {
        let context = this
        const later = () => {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const checkSlide = debounce(() => {
    img.forEach(x => {
        const slideInAt = (window.scrollY + window.innerHeight) - x.height / 2
        const imageBottom = x.offsetTop + x.height
        if (slideInAt > x.offsetTop && window.scrollY < imageBottom)
            x.classList.add('active')
        else
            x.classList.remove('active')
    })
})
