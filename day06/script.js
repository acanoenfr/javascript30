const endpoint = "https://gist.githubusercontent.com/acanoenfr/6342a1fed2ecfdc2cd8acc3331156dd0/raw/220a354aa30c474c007741a4466dbaadc29acb60/cities.json"
const cities = []

fetch(endpoint)
    .then(res => res.json())
    .then(res => cities.push(...res))

console.log(cities)

const find = expr => cities.filter(c => {
    const regex = new RegExp(expr, 'gi')
    return c.city.match(regex) || c.state.match(regex)
})

document
    .querySelector('#search')
    .addEventListener('keyup', event => {
        document.querySelector('#suggestions').innerHTML = find(event.target.value)
            .map(c => {
                const regex = new RegExp(event.target.value, 'gi')
                const city = c.city.replace(regex, `<span class="h1">${event.target.value}</span>`)
                const state = c.state.replace(regex, `<span class="h1">${event.target.value}</span>`)
                return `<li>
                    <span class="name">${city}, ${state}</span>
                    <span class="population">${c.population}</span>
                </li>`
            }).join('')
    })
