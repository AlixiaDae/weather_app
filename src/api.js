import * as dom from './dom'

async function getWeather(url) {
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()

    return data
}

async function getForecast(url) {
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()
    
    return data
}

async function getWeatherData(url, tempScale) {
    let data = await getWeather(url)
    let request = "current"

    dom.displayTemperature(request, data, tempScale)
    dom.displayLocation(data)
    dom.getPicture(request, data)
    dom.getCondition(request, data)
}

async function getForecastData(forecastUrl, tempScale) {
    let data = await getForecast(forecastUrl)
    let request = "forecast"

    dom.displayTemperature(request, data, tempScale)
    dom.getPicture(request, data)
    dom.getCondition(request, data)
}


export {
    getWeather,
    getForecast,
    getWeatherData,
    getForecastData
}