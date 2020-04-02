var el_days = document.getElementById('days')
var el_hours = document.getElementById('hours')
var el_minutes = document.getElementById('minutes')
var el_seconds = document.getElementById('seconds')

var futureDate = new Date(2023, 1, 6, 17, 17, 0).getTime()

setInterval(function() {
    var timeRemained = futureDate - Date.now()
    if (timeRemained < 0) {
        clearInterval()
        el_days.innerHTML = pad(0)+' j'
        el_hours.innerHTML = pad(0)+' h'
        el_minutes.innerHTML = pad(0)+' m'
        el_seconds.innerHTML = pad(0)+' s'
    } else {
        el_days.innerHTML = pad(Math.floor(timeRemained / (1000 * 60 * 60 * 24)))+' j'
        el_hours.innerHTML = pad(Math.floor((timeRemained % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))+' h'
        el_minutes.innerHTML = pad(Math.floor((timeRemained % (1000 * 60 * 60)) / (1000 * 60)))+' m'
        el_seconds.innerHTML = pad(Math.floor((timeRemained % (1000 * 60)) / 1000))+' s'
    }
}, 1000)

function pad(number) {
    if (number < 10) {
        return `0${number}`
    }
    return number
}
