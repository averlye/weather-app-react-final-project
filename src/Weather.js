import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import Loader from 'react-loader-spinner';


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: new Date(response.data.dt * 1000),
    })
  }

  function search() {
    const apiKey = "3b0ffc0f73dbf8aed77c35d6e45972de";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);  
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search()
  }

  function handleChange(event) {
    setCity(event.target.value);
    //access city name
  }

  if (weatherData.ready) {
    return ( 
    <div className="Weather">
        <form id="form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Type the city name..."
            id="city-search"
            autoComplete="off"
            width="300px"
            onChange={handleChange}
            />
            <input type="submit" className="search-button" value="🔎" />
            <button>Search for current location</button>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city} />
    </div>
);
} else {
  search()
  return (
  <Loader
  type="Puff"
  color="#e3bfbe"
  height={80}
  width={80}
  timeout={5000}
/>
)
}
}