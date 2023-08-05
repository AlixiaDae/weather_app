import { checkTempScale, getInputLocation, render } from "./dom";

const tempToggle = document.getElementById("temp-toggle")
const inputLocationElement = document.getElementById("search-location")


//Listeners
inputLocationElement.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        getInputLocation()
        render()
    }
})

tempToggle.addEventListener("click", checkTempScale)

render()
