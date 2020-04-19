const topnav = document.querySelector('.topnav')
// const bg = document.querySelector('.dropdown-bg')
const triggers = document.querySelectorAll('.menu > li')

function onMouseEnter() {
    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = topnav.getBoundingClientRect()

    let coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    this.classList.add('trigger-enter')
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
    // bg.classList.add('open')

    // bg.style.width = `${coords.width}px`
    // bg.style.height = `${coords.height}px`
    // bg.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function onMouseLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    // bg.classList.remove('open')
}

triggers.forEach(x => x.addEventListener('mouseenter', onMouseEnter))
triggers.forEach(x => x.addEventListener('mouseleave', onMouseLeave))
