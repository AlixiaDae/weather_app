async function getWeather(url) {
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()
    
    return data
}

/*function getWeatherData(data) {
    const myData = {
        name: data.location.name,
        temperature_c: data.current.temp_c,
        temperature_f: data.current.temp_f,
        condition: data.current.condition.text,
    }
    return myData
}*/

async function getForecast(location) {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()
    console.log(getForecastData(data))
    return data
}
/*
function getForecastData(data) {
    const forecast = data.forecast.forecastday
    const myForecast = {
        condition: forecast.map(cast => cast.day.condition.text),
        minTemp_c: forecast.map(cast => cast.day.mintemp_c),
        minTemp_f: forecast.map(cast => cast.day.mintemp_f),
        maxTemp_c: forecast.map(cast => cast.day.maxtemp_c),
        maxTemp_f: forecast.map(cast => cast.day.maxtemp_f)
    }

    return myForecast
}
*/

function getWeatherData(data, time) {
    if(time === "current") {
        const myData = {
            name: data.location.name,
            temperature_c: data.current.temp_c,
            temperature_f: data.current.temp_f,
            condition: data.current.condition.text,
        }
        return myData
    } else {
        const forecast = data.forecast.forecastday
        const myForecast = {
            condition: forecast.map(cast => cast.day.condition.text),
            minTemp_c: forecast.map(cast => cast.day.mintemp_c),
            minTemp_f: forecast.map(cast => cast.day.mintemp_f),
            maxTemp_c: forecast.map(cast => cast.day.maxtemp_c),
            maxTemp_f: forecast.map(cast => cast.day.maxtemp_f)
        }
    return myForecast
    }
}

export {
    getForecast,
    getWeather,
    getWeatherData,
    //getForecastData
}