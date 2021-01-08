import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/04d.png`,
      date: new Date(response.data.dt * 1000),
    })
  }

  if (weatherData.ready) {
    return ( 
    <div className="Weather">
        <form id="form">
            <input
            type="text"
            placeholder="Type the city name..."
            id="city-search"
            autoComplete="off"
            width="300px"
            />
            <input type="submit" className="search-button" value="🔎" />
            <button>Search for current location</button>
        </form>
        <WeatherInfo data={weatherData}/>
    </div>
);
} else {
  const apiKey = "3b0ffc0f73dbf8aed77c35d6e45972de";
  let city = props.defaultCity;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
         type="Puff"
         color="#e3bfbe"
         height={80}
         width={80}
         timeout={5000}
    />
  );
};

}