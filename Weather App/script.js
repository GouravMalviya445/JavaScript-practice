const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const apiKey = `41856ef3cef176d4adfd82e4114784de`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl)
    const data = await response.json();

    if (data.cod !== '404') {
        document.querySelector('.description').innerHTML = data.weather[0].description;
        document.querySelector('.temp').innerHTML = `${Math.floor(data.main.temp)}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

        switch (data.weather[0].main) {
            case 'Clear':
                weatherIcon.src = './assets/clear.png'
                break;
            case 'Clouds':
                weatherIcon.src = './assets/clouds.png'
                break;
            case 'Drizzle':
                weatherIcon.src = './assets/drizzle.png'
                break;
            case 'Mist':
                weatherIcon.src = './assets/mist.png'
                break;
            case 'Rain':
                weatherIcon.src = './assets/rain.png'
                break;
            case 'Snow':
                weatherIcon.src = './assets/snow.png'
                break;
            case 'Smoke':
                weatherIcon.src = './assets/smoke.png'
        }

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = "none"

        searchBox.value = '';
    } else {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = 'none'

        searchBox.value = '';
    }

}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})