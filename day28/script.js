const firstElement = document.querySelector('.section:nth-child(1)')

window.addEventListener('scroll', event => (firstElement.style.backgroundPositionY = `${window.pageYOffset * .7}px`))
