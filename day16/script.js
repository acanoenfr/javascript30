const loadData = () => {
    window.fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(res => {
            let person = res.results[0]
            document.getElementById('name').innerHTML = `${person.name.title}. ${person.name.first} ${person.name.last}`
            document.getElementById('gender').innerHTML = person.gender
            document.getElementById('email').innerHTML = person.email
            document.getElementById('phone').innerHTML = person.phone
            document.getElementById('birth').innerHTML = new Date(person.dob.date).toLocaleDateString()
            document.getElementById('address').innerHTML = `${person.location.street.number} ${person.location.street.name}, ${person.location.city}`
            document.getElementById('country').innerHTML = `${person.location.state}, ${person.location.country}`
            document.getElementsByTagName('img')[0].src = person.picture.large
            document.getElementsByTagName('img')[0].alt = person.gender
        })
}

document.body.onload = loadData
document.getElementById('load').addEventListener('click', loadData)
