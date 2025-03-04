const apiKey = "f00c38e0279b7bc85480c3fe775d518c"

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = "Error fetching weather data";
    }
}
