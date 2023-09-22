const cityInput = document.querySelector('.city-search');
const formEl = document.querySelector('form');

const cityValueEl = document.querySelector('.city-title');
const windInfo = document.querySelector('.wind-data');
const humidInfo = document.querySelector('.humid-data');
const feelsLikeInfo = document.querySelector('.feel-like-data');
const tempInfo = document.querySelector('.temp-data');
const descInfo = document.querySelector('.description');
const weatherImgIcon = document.querySelector('.weather-icon');
const dateTime = document.querySelector('.date-time');

const newDateTime = new Date().toDateString();
dateTime.innerHTML = newDateTime;


const weatherApiKey = '7f68652c8384681ef348f57fbae17e96';

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const cityData = cityInput.value;
    //cityValueEl.innerHTML = cityData;
    getWeatherInfo(cityData);
});

async function getWeatherInfo(cityData){
    const apiFetch = `http://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${weatherApiKey}&units=metric`;
    const res = await fetch(apiFetch);

    if(!res.ok){
        alert('Network issues. Check your internet connection');
    }

    const weatherDataInfo = await res.json();

    //console.log(weatherDataInfo);

    const temperature = weatherDataInfo.main.temp;
    const desc = weatherDataInfo.weather[0].description;
    const weatherImageIcon = weatherDataInfo.weather[0].icon;
    const cityName = weatherDataInfo.name;
    const weatherHumidity = weatherDataInfo.main.humidity;
    const windSpeed = weatherDataInfo.wind.speed;
    const feelsLike = weatherDataInfo.main.feels_like;

    cityValueEl.innerHTML = cityName;
    windInfo.innerHTML = `${windSpeed}km/h`;
    tempInfo.innerHTML = `${temperature}°C`;
    humidInfo.innerHTML = `${weatherHumidity}%`;
    feelsLikeInfo.innerHTML = `${feelsLike}°C`;
    descInfo.innerHTML = desc;
    console.log(weatherImageIcon);
    weatherImgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherImageIcon}.png" alt="Forecast Image icon">`;

}



