window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const words = document.querySelector('#app .words')
const speech = new window.SpeechRecognition()
speech.interimResults = true
speech.lang = 'fr-FR'

let p = document.createElement('p')
words.appendChild(p)

speech.addEventListener('result', event => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩')
    p.textContent = poopScript
    if (event.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }
})

speech.addEventListener('end', speech.start)

speech.start()
