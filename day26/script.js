const search = document.querySelector('.search')
const content = document.querySelector('.card-content')
const appId = '7c46457cf186d5e6c1d83e7505cf7eaf'

function getCurrentWeather(search) {
    return window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${appId}`)
        .then(resp => resp.json())
}

search.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        if (event.target.value !== '') {
            getCurrentWeather(event.target.value)
            .then(resp => {
                content.innerHTML = `<div class="card-image">
                    <img src="http://openweathermap.org/img/w/${resp.weather[0].icon}.png" alt="Meteo">
                </div>
                <div class="card-details">
                    <h1 class="title">${resp.weather[0].main} à ${resp.name}, ${resp.sys.country}</h1>
                    <h2>${parseInt(resp.main.temp - 273)} °C</h2>
                </div>`
            })
            .catch(() => {
                alert('Le lien avec OpenWeatherMap a échoué.')
            })
        }
    }
})
