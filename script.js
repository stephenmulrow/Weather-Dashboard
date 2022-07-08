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

$("#searchBtn").click(function (event) {
  event.preventDefault()

  var cityHistory = document.querySelector(".form-input")
  var textEntry = cityHistory.value
 
  localStorage.setItem("form-input", textEntry)
  
})




 var searchHistory = localStorage.getItem("form-input")

document.querySelector(".cityList").innerHTML = searchHistory






var displayWeather = function(data) {
  var cityName = data.name
  var temp = data.main.temp
  var humidity = data.main.humidity
  var wind = data.wind.speed
  var lat = data.coord.lat 
  var lon = data.coord.lon
  var iconCode = data.weather[0].icon
  var iconWork = "http://openweathermap.org/img/wn/"+ iconCode +".png"
  $("#ticon").attr("src", iconWork)
  console.log(iconCode)

  document.querySelector(".cityWeather").innerHTML = "Weather in  " + cityName + moment().format(" dddd, MMMM Do YYYY");
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

var forecast = data.list[7].main.temp
var day = moment().add(1, "days").format("MMMM DD")
var wind = data.list[7].wind.speed
var humidity = data.list[7].main.humidity
var iconCode = data.list[7].weather[0].icon

var iconUrl = "http://openweathermap.org/img/wn/"+iconCode + ".png"

var forecast2 = data.list[15].main.temp
var day2 = moment().add(2, "days").format("MMMM DD")
var wind2 = data.list[15].wind.speed
var humidity2 = data.list[15].main.humidity
var iconCode2 = data.list[15].weather[0].icon

var iconUrl2 = "http://openweathermap.org/img/wn/"+iconCode2 + ".png"

var forecast3 = data.list[23].main.temp
var day3 = moment().add(3, "days").format("MMMM DD")
var wind3 = data.list[23].wind.speed
var humidity3 = data.list[23].main.humidity
var iconCode3 = data.list[23].weather[0].icon

var iconUrl3 = "http://openweathermap.org/img/wn/"+iconCode3 + ".png"

var forecast4 = data.list[31].main.temp
var day4 = moment().add(4, "days").format("MMMM DD")
var wind4 = data.list[31].wind.speed
var humidity4 = data.list[31].main.humidity
var iconCode4 = data.list[31].weather[0].icon

var iconUrl4 = "http://openweathermap.org/img/wn/"+iconCode4 + ".png"

var forecast5 = data.list[39].main.temp
var day5 = moment().add(5, "days").format("MMMM DD")
var wind5 = data.list[39].wind.speed
var humidity5 = data.list[39].main.humidity
var iconCode5 = data.list[39].weather[0].icon

var iconUrl5 = "http://openweathermap.org/img/wn/"+iconCode5 + ".png"


document.querySelector(".dayOne").innerHTML = day 
document.querySelector(".forecast1").innerHTML =  forecast + " degrees"
document.querySelector(".forecast2").innerHTML = "Wind speed:  "  + wind + " mph"
document.querySelector(".forecast3").innerHTML = "Humidity:  "  + humidity +  " % "
document.querySelector(".dayTwo").innerHTML = day2 
document.querySelector(".forecast4").innerHTML = forecast2 + " degrees"
document.querySelector(".forecast5").innerHTML = "Wind speed:  " + wind2 + " mph"
document.querySelector(".forecast6").innerHTML= "Humidity:  " + humidity2 + " %"
document.querySelector(".dayThree").innerHTML = day3 
document.querySelector(".forecast7").innerHTML =  forecast3 + " degrees"
document.querySelector(".forecast8").innerHTML = "Wind speed:  "  + wind3 + " mph"
document.querySelector(".forecast9").innerHTML = "Humidity:  "  + humidity3 +  " % "
document.querySelector(".dayFour").innerHTML = day4 
document.querySelector(".forecast10").innerHTML =  forecast4 + " degrees"
document.querySelector(".forecast11").innerHTML = "Wind speed:  "  + wind4 + " mph"
document.querySelector(".forecast12").innerHTML = "Humidity:  "  + humidity4 +  " % "
document.querySelector(".dayFive").innerHTML = day5 
document.querySelector(".forecast13").innerHTML =  forecast5 + " degrees"
document.querySelector(".forecast14").innerHTML = "Wind speed:  "  + wind5 + " mph"
document.querySelector(".forecast15").innerHTML = "Humidity:  "  + humidity5 +  " % "

$("#wicon").attr("src", iconUrl)
$("#wicon2").attr("src", iconUrl2)
$("#wicon3").attr("src", iconUrl3)
$("#wicon4").attr("src", iconUrl4)
$("#wicon5").attr("src", iconUrl5)


}



searchBtn.addEventListener("click", formSubmitHandler)






