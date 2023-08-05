async function getWeather(url) {
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()
    
    return data
}

async function getForecast(url) {
    const response = await fetch(url, {mode:'cors'})
    const data = await response.json()
    console.log(data)
    return data
}

export {
    getWeather,
    getForecast
}