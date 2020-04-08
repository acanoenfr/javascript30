const app = document.getElementById('app')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location => {
        let longitude = location.coords.longitude
        let latitude = location.coords.latitude
        app.innerHTML = `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed" width="100%" height="100%" frameborder="0" style="border: 0;"></iframe>`
    }, error => {
        app.innerHTML = `<h1 class="title">Une erreur est survenue.</h1>`
    })
} else {
    app.innerHTML = `<h1 class="title">Impossible d\'accéder à votre position.</h1>`
}
