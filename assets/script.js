
var apiKey = '77b6e16c240d6ac8e0f66b5dd65a3e77'

var searchInput = document.getElementById('search-input')
var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener("click", searchCity)

function searchCity(e) {
    if (!searchInput.value) {
        return
    }
    e.preventDefault()
    var search = searchInput.value.trim()
    console.log(search);
    geoFetch(search)
    searchInput.innerHTML = ""
}
//purpose is to pass search thru to get lat, long, name geo to use in the weather api fetch, calling out next function to pull weather data.

function geoFetch(search) {
    console.log(search);

    var geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`

    fetch(geoURL)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data[0]);
            //historySave(search)
            weatherFetch(data[0])
        })
}

//fetching weather data, then calling out next functions to display for current/ forecast html divs
function weatherFetch(location) {
    console.log(location);

    var { lat, lon } = location
    var city = location.name
    console.log(lat)
    console.log(lon)

    var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(weatherAPI)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.list);
            //current day weather data
            currentDisplay(city, data.list[0])
            //forecast by day weather data
            forecastDisplay(data.list)
        })
}

//next function: display current data
function currentDisplay(city, weather) {
    console.log(weather);

    //pull data from api 
    var temp = Math.floor(((weather.main.temp-273.15)*1.8)+32);
    var wind = Math.floor(weather.wind.speed * 2.236936);
    var humidity = weather.main.humidity
    var currentDate = new Date();


    //create a card
    var mainCard = document.getElementById("card-id")
    mainCard.setAttribute("class", "card")

    var cardBody = document.getElementById("card-body")
    cardBody.setAttribute("class", "card-body")

    var cityEl = document.createElement("h1")
    var tempEl = document.createElement("p")
    var windEl = document.createElement("p")
    var humidityEl = document.createElement("p")

    //join the data with a card - LOOK INTO TIMEZONE
    tempEl.textContent = `Temp: ${temp} ℉`
    windEl.textContent = `Wind: ${wind} mph`
    humidityEl.textContent = `Humidity: ${humidity} %`
    cityEl.textContent = `${city} (${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()})`

    cardBody.appendChild(cityEl);
    cardBody.appendChild(tempEl);
    cardBody.appendChild(windEl);
    cardBody.appendChild(humidityEl);
}



// function forecastDisplay(dataList){
// console.log(forecast);
//     // Need to to create a card 
//     var forCard = document.getElementById("foreast5")
//     forCard.setAttribute("class", "card", "style", "width: 18rem")

//     var forCardBody = document.getElementById("cardmain")
//     forCardBody.setAttribute("class", "card-body")

//     //cWe already have an array from data so we need to ensure that each day has the correct info from array cooresponding to date
//     var date = 

//     create for loop for card 
    

    
//}

// function setLocal(weatherObj){
//     console.log(weatherObj);

// }

// function getLocal(){
// var localStrg = localStorage.getItem()
// }

// function Displaylocal(){

// var localBtns = document.createElement('button')

// for loop
// }