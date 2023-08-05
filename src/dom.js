function displayTemperature(request, data, scale) {
    const temperatureElement = document.querySelector(".temperature")
    let unit = "°C"

    if(request === "current") {
        let tempScale = "celsius" 
        temperatureElement.textContent = ""

        if(scale !== tempScale) {
            unit = "°F"
            temperatureElement.textContent =`${data.current.temp_f}${unit}`
        } else {
            temperatureElement.textContent = `${data.current.temp_c}${unit}`
        }
    } else {
        let tempScale = "celsius"
        let unit = "°C"

        const forecastTempElements = document.querySelectorAll(".forecast-temp")
        
        for(let i = 0; i < forecastTempElements.length; i++ ){
            let minTempElement = forecastTempElements[i].querySelector(".min-temp")
            let maxTempElement = forecastTempElements[i].querySelector(".max-temp")
            let castObject = data.forecast.forecastday[i].day

            if(scale !== tempScale) {
                unit = "°F"
                minTempElement.textContent = `${castObject.mintemp_f}${unit}`
                maxTempElement.textContent = `${castObject.maxtemp_f}${unit}`
            } else {
                minTempElement.textContent = `${castObject.mintemp_c}${unit}`
                maxTempElement.textContent = `${castObject.maxtemp_c}${unit}`
            }
        }

    }
    
}

function displayLocation(data) {
    const locationElement = document.querySelector("h2")

    locationElement.textContent = data.location.name
}

function getCondition(request, data) {
    if(request === "current") {
        const messageElement = document.querySelector(".message")

        messageElement.textContent = `${data.current.condition.text}`
    } else {
        const forecastMessageElement = document.querySelectorAll(".forecast-message") 
        console.log(forecastMessageElement)
        for(let i = 0; i < forecastMessageElement.length; i++) {
            let condition = data.forecast.forecastday[i].day.condition.text
            forecastMessageElement[i].textContent = condition
        }
    }
    
}

function getPicture(request, data) {
    const imageElement = document.querySelector(".weather-picture")
    const imageFolder = '../assets/icons/'
    const sunny = `${imageFolder}/sunny.svg`
    const cloudy = `${imageFolder}/cloudy.svg`
    const lightning = `${imageFolder}/lightning.svg`
    const rainy = `${imageFolder}/rainy.svg`
    const snow = `${imageFolder}/snow.svg`
    const sunnyArray = [
        "clear",
        "sunny"
    ]
    const rainyArray = [
        "patchy rain possible",
        "patchy light drizzle",
        "light drizzle",
        "patchy light rain",
        "light rain",
        "moderate rain at times",
        "moderate rain",
        "heavy rain at times",
        "heavy rain",
        "icy pellets",
        "light rain shower",
        "moderate or heavy rain shower",
        "torrential rain shower",
        "patchy sleet possible",
        "light sleet",
        "moderate or heavy sleet",
        "light sleet showers",
        "moderate or heavy sleet showers"
    ]
    const cloudyArray = [
        "partly cloudy",
        "overcast",
        "cloudy",
        "mist",
        "fog"
    ]
    const snowArray = [
        "patchy snow possible",
        "patchy freezing drizzle possible",
        "blowing snow",
        "blizzard",
        "freezing fog",
        "freezing drizzle",
        "heavy freezing drizzle",
        "light freezing rain",
        "moderate or heavy freezing rain",
        "patchy light snow",
        "light snow",
        "patchy moderate snow",
        "moderate snow",
        "patchy heavy snow",
        "heavy snow",
        "light snow showers",
        "moderate or heavy snow showers",
        "ice pellets",
        "light showers of ice pellets",
        "moderate or heavy showers of ice pellets"
    ]
    const lightningArray = [
        "thundery outbreaks possible",
        "patchy light rain with thunder",
        "moderate or heavy rain with thunder",
        "patchy light snow with thunder",
        "moderate or heavy snow with thunder"

    ]
    if(request === "current") {
    let condition = data.current.condition.text.toLowerCase()
        if(sunnyArray.includes(condition)) {
            imageElement.src = sunny
            imageElement.classList.add("spin")
        } else if(cloudyArray.includes(condition)) {
            imageElement.src = cloudy
            imageElement.classList.remove("spin")
        } else if(rainyArray.includes(condition)) {
            imageElement.src = rainy
            imageElement.classList.remove("spin")
        } else if(snowArray.includes(condition)) {
            imageElement.src = snow
            imageElement.classList.add("spin")
        } else if(lightningArray.includes(condition)) {
            imageElement.src = lightning
            imageElement.classList.remove("spin")
        }
    } else {
        const forecastPictures = document.querySelectorAll(".forecast-picture")
        for(let i = 0; i < forecastPictures.length; i++) {
            let forecastCondition = data.forecast.forecastday[i].day.condition.text.toLowerCase()
            if(sunnyArray.includes(forecastCondition)) {
                forecastPictures[i].src = sunny
                forecastPictures[i].classList.add("spin")
            } else if(cloudyArray.includes(forecastCondition)) {
                forecastPictures[i].src = cloudy
                forecastPictures[i].classList.remove("spin")
            } else if(rainyArray.includes(forecastCondition)) {
                forecastPictures[i].src = rainy
                forecastPictures[i].classList.remove("spin")
            } else if(snowArray.includes(forecastCondition)) {
                imageElement.src = snow
                imageElement.classList.add("spin")
            } else if(lightningArray.includes(forecastCondition)) {
                forecastPictures[i].src = lightning
                forecastPictures[i].classList.remove("spin")
            }
        }
        
    }
    
}



export {
    displayTemperature,
    displayLocation,
    getCondition,
    getPicture
}
    