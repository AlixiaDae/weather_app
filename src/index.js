import * as api from './api'
import * as dom from './dom'

let location = "" || "Milan"
let url = `http://api.weatherapi.com/v1/current.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`
let forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}&days=3`
const tempToggle = document.getElementById("temp-toggle")
let tempScale = "celsius"

async function getWeatherData(url, tempScale) {
    let data = await api.getWeather(url)
    let request = "current"

    dom.displayTemperature(request, data, tempScale)
    dom.displayLocation(data)
    dom.getPicture(request, data)
    dom.getCondition(request, data)
}

async function getForecastData(forecastUrl, tempScale) {
    let data = await api.getForecast(forecastUrl)
    let request = "forecast"

    dom.displayTemperature(request, data, tempScale)
    dom.getPicture(request, data)
    dom.getCondition(request, data)
}

tempToggle.addEventListener("click", () => {
    if(!tempToggle.checked) {
        getWeatherData(url, "celsius")
        getForecastData(forecastUrl, "celsius")
    } else if(tempToggle.checked) {
        getWeatherData(url, "fahrenheit")
        getForecastData(forecastUrl, "fahrenheit")
    }
})

getForecastData(forecastUrl, tempScale)
getWeatherData(url, tempScale)