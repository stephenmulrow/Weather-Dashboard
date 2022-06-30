var searchBtn = document.getElementById("searchBtn")
var citySearch = document.querySelector("#newCity")

var formSubmitHandler = function (event) {
  event.preventDefault()

  var newCity = citySearch.value.trim();

  if (newCity) {
    getWeather(newCity); 
  }else{
    alert("Please enter a city name")
  }

}

var apiKey =  "af95690b948018071de1597590c2059c"

var getWeather = function (city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
  )
  .then((response) => response.json())
  .then((data) => this.displayWeather(data)) 

  
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=af95690b948018071de1597590c2059c"
  )
  .then((response) => response.json())
  .then((data) => this.displayForecast(data))

  }

var displayWeather = function(data) {
  var cityName = data.name
  var temp = data.main.temp
  var humidity = data.main.humidity
  var wind = data.wind.speed
  var lat = data.coord.lat 
  var lon = data.coord.lon

  console.log(temp, humidity, wind)
  document.querySelector(".cityWeather").innerHTML = "Weather in " + cityName;
  document.querySelector(".tempLi").innerHTML = temp + " F";
  document.querySelector(".tempLi2").innerHTML = "Humidity: " + humidity + " %";
  document.querySelector(".tempLi3").innerHTML = "Wind: " + wind + " mph";
  
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=af95690b948018071de1597590c2059c"
  )
  .then((response) => response.json())
  .then((data) => this.displayUv(data))
}

var displayUv = function(data) {
  var uvi = data.current.uvi 

  document.querySelector(".tempLi4").innerHTML = "UV Index: " + uvi

}

var displayForecast = function(data) {


console.log(data.list[3].dt_txt)
console.log(data.list[3].main.temp)


}
// var getUV = function(data) {
  
//   fetch(
//     "https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=af95690b948018071de1597590c2059c"
//     )
//     .then((response) => response.json())
//   .then((data) => console.log(data))

// }

searchBtn.addEventListener("click", formSubmitHandler)





// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// var searchBox = document.querySelector("#city")
// var weatherBox = document.querySelector("#weather-container")
// var textBox = document.querySelectorAll("search")
// var newCity = searchBox.value.trim()
// var searchBtn = document.getElementById("searchBtn")

// var searchButtonHandler = function (event) {
//   event.preventDefault();

//   if (city) {
//       getCityWeather(city);

//       weatherBox.textContent = ''
//       searchBox = ''
//   }else (
//     alert("Please enter a valid city name")
//   )
// }


// var getCityWeather = function (city) {
//   var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=af95690b948018071de1597590c2059c"
  


//   fetch(apiUrl)
//   .then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayCity(data, newCity)
//       })
//     }else{
//       alert('Error: ' + response.statusText)
//     }
//   })
//   .catch(function (error) {
//     alert("unable to connect to OpenWeather");
//   });
// }

// var displayCity = function (newCity) {
//   var weatherEl = document.createElement("div")
//   weatherEl.classList = "list-item flex-row justify-space-between align-center"

//   var cityTitle = document.createElement("span")
//   cityTitle.textContent = newCity



// }




// console.log(newCity)
// searchBtn.addEventListener("click", getCityWeather)


// // console.log(getCityWeather)


// // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=af95690b948018071de1597590c2059c


// // http://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=af95690b948018071de1597590c2059c