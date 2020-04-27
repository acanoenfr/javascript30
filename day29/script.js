let interval = 3000

const getSlides = () => document.querySelector('.carousel').querySelectorAll('figure')

const changeSlide = () => {
    const slides = getSlides()
    let index = 0
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show')) {
            slides[i].classList.remove('show')
            slides[i].classList.add('hide')
            index = i
        }
    }
    if (++index == slides.length) index = 0
    slides[index].classList.add('show')
    slides[index].classList.remove('hide')
    setTimeout(changeSlide, interval)
}

const startCarousel = () => (setTimeout(changeSlide, interval))

startCarousel()
