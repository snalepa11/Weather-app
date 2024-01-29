
var apiKey = '77b6e16c240d6ac8e0f66b5dd65a3e77'



var searchInput = document.getElementById('search-input')
var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener("click", searchCity)

function searchCity(e) {
    if (!searchInput.value){
        return
    }
    e.preventDefault()
    var search = searchInput.value.trim()
    console.log(search);
    geoFetch(search)
    searchInput.innerHTML = ""
}
//purpose is to pass search thru to get lat, long, name geo to use in the weather api fetch, calling out next function to pull weather data.

function geoFetch(search){
    console.log(search);

    var geoURL =`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`

    fetch(geoURL)
    .then(function(response){
    return response.json();
    }).then(function(data) {
        console.log(data[0]);
        //historySave(search)
        weatherFetch(data[0])
    })
}

//fetching weather data, then calling out next functions to display for current/ forecast html divs
function weatherFetch(location){
console.log(location);

var {lat, lon} = location
var city = location.name
console.log(lat)
console.log(lon)

var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

fetch(weatherAPI)
.then(function(response){
return response.json();
}).then(function(data) {
    console.log(data.list);
    //current day weather data
currentDisplay(data.list[0])
    //forecast by day weather data
    //forecastDisplay(data.list)
})
}

//next function: display current data
function currentDisplay(weather){
    console.log(weather);

    //pull data from api 
    var temp = weather.main.temp

    //create a card

    //join the data with a card
}