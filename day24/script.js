const player = document.querySelector('.player')
const video = document.querySelector('.video')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress-bar')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const sliders = document.querySelectorAll('.player-slider')
const speed = document.querySelector('.speed')
const speedBar = document.querySelector('.speed-bar')

let mouseDown = false

function togglePlay() {
    if (video.paused)
        video.play()
    else
        video.pause()
}

function updateToggle() {
    toggle.textContent = this.paused ? '►' : '❚ ❚'
}

function updateProgressBar() {
    progressBar.style.width = `${(this.currentTime / this.duration) * 100}%`
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function scrub(event) {
    video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateToggle)
video.addEventListener('pause', updateToggle)
video.addEventListener('timeupdate', updateProgressBar)

window.addEventListener('keydown', event => {
    if (event.keyCode === 32) togglePlay()
})

toggle.addEventListener('click', togglePlay)

document.body.onload = () => {
    togglePlay()
}

skipButtons.forEach(x => x.addEventListener('click', skip))

sliders.forEach(x => x.addEventListener('change', handleRangeUpdate))
sliders.forEach(x => x.addEventListener('mousemove', handleRangeUpdate))

progress.addEventListener('click', scrub)

progress.addEventListener('mousemove', event => mouseDown && scrub(event))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

speed.addEventListener('mousemove', function(event) {
    const y = event.pageY - this.offsetTop
    const percent = y / this.offsetHeight
    const min = .4
    const max = 4
    const playbackRate = percent * (max - min) + min
    speedBar.style.height = Math.round(percent * 100) + '%'
    speedBar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate
})
