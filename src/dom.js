import * as api from "./api";



const dom = (() => {
    const body = document.body
    const locationElement = document.querySelector("h2")
    const imageElement = document.querySelector(".weather-picture")
    const temperatureElement = document.querySelector(".temperature")
    const messageElement = document.querySelector(".message")

    let location = "Milan"

    let url = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`
    
    const iconsFolder = "../assets/icons/"

    function getPicture(textCondition) {
        if(textCondition === "Sunny" || textCondition === "Clear") {
            imageElement.src = `${iconsFolder}sunny.svg`
        } else if (textCondition === "Partly cloudy" || textCondition === "Cloudy") {
            imageElement.src = `${iconsFolder}cloudy.svg`
        } else if (textCondition === "Patchy rain possible" || textCondition === "Light drizzle" || textCondition === "Patch light rain"|| textCondition === "Light rain" || textCondition === "Moderate rain at times" || textCondition === "Moderate rain" || textCondition === "Light rain shower") {
            imageElement.src = `${iconsFolder}rainy.svg`
        } 
    }
    
    async function render(time) {
        let data = await api.getWeather(url)
        let processedData = api.getWeatherData(data, time)

        locationElement.textContent = processedData.name
        messageElement.textContent = processedData.condition
        temperatureElement.textContent = `${processedData.temperature_c}°C`
        getPicture(processedData.condition)
    }

    render("current")

    return body
})()

export default dom