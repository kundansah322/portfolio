/* LIVE CLOCK */

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =

now.toLocaleTimeString() +

" | " +

now.toLocaleDateString();

}

setInterval(updateClock,1000);

updateClock();


/* WEATHER */

async function getWeather(){

try{

const response = await fetch(

"https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current_weather=true"

);

const data = await response.json();

document.getElementById("weather").innerHTML =

`🌤 Kathmandu ${data.current_weather.temperature}°C`;

}

catch{

document.getElementById("weather").innerHTML =

"Weather unavailable";

}

}

getWeather();


/* DARK LIGHT MODE */

const btn = document.getElementById("themeToggle");

btn.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

btn.innerHTML = "☀️";

}

else{

btn.innerHTML = "🌙";

}

};
