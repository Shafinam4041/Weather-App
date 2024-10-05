const apiKey = '293668bfce5ac7b85e6a79c016a0879c'; // Replace with your OpenWeatherMap API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('locationInput');

getWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a city name!');
    }
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const description = document.getElementById('description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');

    description.innerHTML = `Weather: ${data.weather[0].description}`;
    temperature.innerHTML = `Temperature: ${data.main.temp}°C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}
