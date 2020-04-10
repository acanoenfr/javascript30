const chrono = document.getElementById('chrono')

let isStarted = false
let intervalNumber = 0;

window.addEventListener('keydown', event => {
    if (event.keyCode == 32) {
        if (isStarted) {
            isStarted = false;
            clearInterval(intervalNumber)
        } else {
            isStarted = true;
            intervalNumber = setInterval(() => {
                let time = chrono.innerHTML.split(':').map(x => parseInt(x))
                time[2]--
                if (time[2] < 0) {
                    time[2] = 59
                    time[1]--
                }
                if (time[1] < 0) {
                    time[1] = 59
                    time[0]--
                }
                chrono.innerHTML = pad(time[0])+':'+pad(time[1])+':'+pad(time[2])
                if (time[0] === 0 && time[1] === 0 && time[2] === 0) {
                    isStarted = false
                    clearInterval(intervalNumber)
                    alert('Compte à rebours terminé.')
                }
            }, 1000)
        }
    }
    if (event.keyCode == 8) {
        if (isStarted) clearInterval(intervalNumber)
        do {
            chrono.innerHTML = window.prompt('Entrez une valeur de départ :', chrono.innerHTML)
        } while (!chrono.innerHTML.match(/[0-9]+:[0-5][0-9]:[0-5][0-9]/))
    }
})

const pad = number => {
    if (number < 10) {
        return '0' + number
    }
    return number
}
