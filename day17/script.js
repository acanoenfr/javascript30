const compass = document.querySelector('#app .sp-img')
const speed = document.querySelector('#app .sp-title .sp-value')

navigator.geolocation.watchPosition(data => {
    console.log(data)
    speed.textContent = data.coords.speed
    compass.style.transform = `rotate(${data.coords.heading}deg)`
}, err => {
    console.error(err)
    alert('Erreur lors du calcul de votre position')
}, {
    enableHighAccuracy: true,
    maximumAge : 60000,
    timeout : 45000
})
