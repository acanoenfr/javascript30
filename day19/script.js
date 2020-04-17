const voices = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const speech = new SpeechSynthesisUtterance()

let allVoices = []

speech.text = document.querySelector('[name="text"]').value

function getVoices() {
    allVoices = this.getVoices()
    voices.innerHTML = allVoices.filter(x => x.lang.includes('fr'))
        .map(x => `<option value="${x.name}">${x.name} (${x.lang})</option>`)
        .join('')
}

function setVoice() {
    speech.voice = allVoices.find(x => x.name === this.value)
    toggle()
}

function toggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) speechSynthesis.speak(speech)
}

function setOption() {
    speech[this.name] = this.value
    toggle()
}

speechSynthesis.addEventListener('voiceschanged', getVoices)
voices.addEventListener('change', setVoice)
options.forEach(x => x.addEventListener('change', setOption))
play.addEventListener('click', toggle)
stop.addEventListener('click', () => toggle(false))
