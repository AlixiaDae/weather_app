(()=>{"use strict";var e={};async function t(e,t){let r=await async function(e){const t=await fetch(e,{mode:"cors"});return await t.json()}(e),o="current";m(o,r,t),function(e){document.querySelector("h2").textContent=e.location.name}(r),f(o,r),p(o,r)}async function r(e,t){let r=await async function(e){const t=await fetch(e,{mode:"cors"});return await t.json()}(e),o="forecast";m(o,r,t),f(o,r),p(o,r)}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var o=r.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!t;)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const o=e.p+"f7490249b47ea2e8cd9a.svg",n=e.p+"a9786e099a2ca65999bd.svg",s=e.p+"121aabe6986a6d47a4c8.svg",c=e.p+"3cd78ce7b5005408d0a9.svg",a=e.p+"695e959acce68f878c81.svg";let i=localStorage.getItem("location");const l=document.getElementById("temp-toggle");let u="celsius";const d=document.getElementById("search-location");function h(e){return"current"===e?`https://api.weatherapi.com/v1/current.json?key=3e703f9b6f2b40a1ad4122531230308&q=${i.toLowerCase()}`:`https://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${i.toLowerCase()}&days=3`}function m(e,t,r){const o=document.querySelector(".temperature");let n="°C";if("current"===e){let e="celsius";o.textContent="",r!==e?(n="°F",o.textContent=`${t.current.temp_f}${n}`):o.textContent=`${t.current.temp_c}${n}`}else{let e="celsius",o="°C";const n=document.querySelectorAll(".forecast-temp");for(let s=0;s<n.length;s++){let c=n[s].querySelector(".min-temp"),a=n[s].querySelector(".max-temp"),i=t.forecast.forecastday[s].day;r!==e?(o="°F",c.textContent=`${i.mintemp_f}${o}`,a.textContent=`${i.maxtemp_f}${o}`):(c.textContent=`${i.mintemp_c}${o}`,a.textContent=`${i.maxtemp_c}${o}`)}}}function p(e,t){if("current"===e)document.querySelector(".message").textContent=`${t.current.condition.text}`;else{const e=document.querySelectorAll(".forecast-message");for(let r=0;r<e.length;r++){let o=t.forecast.forecastday[r].day.condition.text;e[r].textContent=o}}}function f(e,t){const r=document.querySelector(".weather-picture"),i=["clear","sunny"],l=["patchy rain possible","patchy light drizzle","light drizzle","patchy light rain","light rain","moderate rain at times","moderate rain","heavy rain at times","heavy rain","icy pellets","light rain shower","moderate or heavy rain shower","torrential rain shower","patchy sleet possible","light sleet","moderate or heavy sleet","light sleet showers","moderate or heavy sleet showers"],u=["partly cloudy","overcast","cloudy","mist","fog"],d=["patchy snow possible","patchy freezing drizzle possible","blowing snow","blizzard","freezing fog","freezing drizzle","heavy freezing drizzle","light freezing rain","moderate or heavy freezing rain","patchy light snow","light snow","patchy moderate snow","moderate snow","patchy heavy snow","heavy snow","light snow showers","moderate or heavy snow showers","ice pellets","light showers of ice pellets","moderate or heavy showers of ice pellets"],h=["thundery outbreaks possible","patchy light rain with thunder","moderate or heavy rain with thunder","patchy light snow with thunder","moderate or heavy snow with thunder"];if("current"===e){let e=t.current.condition.text.toLowerCase();i.includes(e)?(r.src=o,r.classList.add("spin")):u.includes(e)?(r.src=n,r.classList.remove("spin")):l.includes(e)?(r.src=c,r.classList.remove("spin")):d.includes(e)?(r.src=a,r.classList.add("spin")):h.includes(e)&&(r.src=s,r.classList.remove("spin"))}else{const e=document.querySelectorAll(".forecast-picture");for(let m=0;m<e.length;m++){let p=t.forecast.forecastday[m].day.condition.text.toLowerCase();i.includes(p)?(e[m].src=o,e[m].classList.add("spin")):u.includes(p)?(e[m].src=n,e[m].classList.remove("spin")):l.includes(p)?(e[m].src=c,e[m].classList.remove("spin")):d.includes(p)?(r.src=a,r.classList.add("spin")):h.includes(p)&&(e[m].src=s,e[m].classList.remove("spin"))}}}function g(){if(localStorage.getItem("location")){i=localStorage.getItem("location");let e=h("current");r(h("forecast"),u),t(e,u)}else{i="Milan";let e=h("current");r(h("forecast"),u),t(e,u)}}!function(){const e=new Date,t=e.getDate()+1,r=e.getMonth()+1,o=e.getFullYear(),n=e.getDate()+2,s=e.getMonth()+1,c=e.getFullYear(),a=document.querySelectorAll(".date");a[1].textContent=`${t}/${r}/${o}`,a[2].textContent=`${n}/${s}/${c}`}();const y=document.getElementById("temp-toggle");document.getElementById("search-location").addEventListener("keypress",(e=>{"Enter"===e.key&&(i=d.value,localStorage.setItem("location",i),g())})),y.addEventListener("click",(function(){if(l.checked){if(l.checked){i=localStorage.getItem("location");let e=h("current");r(h("forecast"),"fahrenheit"),t(e,"fahrenheit")}}else{i=localStorage.getItem("location");let e=h("current");r(h("forecast"),"celsius"),t(e,"celsius")}})),g()})();