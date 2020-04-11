const sliderImages = document.querySelectorAll('.slide-in');

const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return (...args)=> {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
};
const checkSlide = debounce(() => {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2,
            imgBottom = sliderImage.offsetTop + sliderImage.height,
            isHalfShown = slideInAt > sliderImage.offsetTop,
            isInView = window.scrollY < imgBottom;
        (isHalfShown && isInView) ?
            sliderImage.classList.add('active') : sliderImage.classList.remove('active');
    })
})
window.addEventListener('scroll', checkSlide)