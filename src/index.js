import { getForecast,getWeather } from './api'
import dom from './dom'
import json from './weather_conditions.json'

// DOM

const temperatureElement = document.querySelector(".temperature")
const imageElement = document.querySelector(".weather-picture")
const message = document.querySelector(".message")
let locationCode;
const weatherFolder = "../assets/weather/64x64/day/"
const iconsFolder = "../assets/icons/"
let location = "" || "Milan"

dom


