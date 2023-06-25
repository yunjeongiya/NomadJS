const API_KEY = "e25c13117fc67a535ac9ebed60caee44";

const weather = document.querySelector("#weather");
const city = weather.querySelector("#city");
const weatherIcon = weather.querySelector("#weatherIcon");
const temp = weather.querySelector("#temperature");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` ;  
    fetch(url).then(resopnse=>resopnse.json()).then(data=>{
        city.innerText = data.name;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temp.innerText = `${data.main.temp}°C`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);