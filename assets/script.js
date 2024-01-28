//var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
//var apiKey = '77b6e16c240d6ac8e0f66b5dd65a3e77'

//geoURL =`https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`

var searchInput = document.getElementById('search-input')
var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener("click", searchCity)

function searchCity(e){
if (!searchInput.value){
    return
}
e.preventDefault()
var search = searchInput.value.trim()
console.log(search);
}