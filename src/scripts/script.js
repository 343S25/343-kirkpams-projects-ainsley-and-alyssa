// Make carousel not move by itself
$('.carousel').carousel({
    interval: false,
  });

// Call to weather API
const weatherButton = document.getElementById("weatherButton");
let weatherP = document.getElementById("weatherP");
weatherButton.addEventListener('click', async function() {
    console.log("click worked");
    let resp = await fetch("https://api.weatherapi.com/v1/forecast.json?key=2f4f1c7a2eec4e77891215249251604&q=22807&days=1");
    let myjson = await resp.json();
    console.log(myjson);
    const forecast = myjson.forecast.forecastday[0];
    const maxTempF = forecast.day.maxtemp_f;
    const minTempF = forecast.day.mintemp_f;
    const chanceOfRain = forecast.day.daily_chance_of_rain;
    const weatherSummary = `Forecast for Today:\nHigh: ${maxTempF}°F\nLow: ${minTempF}°F\nChance of Rain: ${chanceOfRain}%. Click to close.`;
    weatherP.textContent = weatherSummary;
    weatherP.href = "#";
    weatherDiv.style.display = "inherit";
})

const weatherDiv = document.getElementById("weatherDiv");
weatherDiv.addEventListener('click', function() {
    weatherDiv.style.display = "none";
})

// Call to randomize API



// Lower buttons functionality
const laundryButton = document.getElementById('laundry-button');
laundryButton.addEventListener('click', function() {
    window.location.href = 'laundry.html';
});

const favsButton = document.getElementById('favorites-button');
favsButton.addEventListener('click', function() {
    window.location.href = 'favorites.html';
});

// Create an object out of add form submission