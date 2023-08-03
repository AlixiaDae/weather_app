import json from './weather_conditions.json'

// console.log(json.find(code => code.code === 1000))

const temperatureElement = document.querySelector(".temperature")
const imageElement = document.querySelector(".weather-picture")
let locationCode;
const weatherFolder = "../assets/weather/64x64/day/"
const iconsFolder = "../assets/icons/"


async function getTemperature() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=3e703f9b6f2b40a1ad4122531230308&q=batangas', {mode:'cors'})
    const data = await response.json()
    let text = data.current.condition.text
    let temp = data.current.temp_c
    getPicture(text)
    // console.log(iconCode)
    temperatureElement.textContent = `${temp}\xB0C`
}

getTemperature()

function getPicture(textCondition) {
    if(textCondition === "Sunny") {
        imageElement.src = `${iconsFolder}sunny.svg`
    } else if (textCondition === "Partly cloudy" || textCondition === "Cloudy") {
        imageElement.src = `${iconsFolder}cloudy.svg`
    } else if (textCondition === "Patchy rain possible" || textCondition === "Light drizzle" || textCondition === "Patch light rain"|| textCondition === "Light rain" || textCondition === "Moderate rain at times" || textCondition === "Moderate rain" || textCondition === "Light rain shower") {
        imageElement.src = `${iconsFolder}rainy.svg`
    }
   
}

