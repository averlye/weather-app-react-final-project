import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default function Weather(props) {

  const [ready, setReady] = useState(false);
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
      date: `4th January 2021`,
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
        <div className="city-details">
            <p id="date">{weatherData.date}</p>
            <div className="row">
            <div className="col-sm-6">
              <div className="flow-right">
                <h1>{weatherData.city}</h1>
                <img
                  src={weatherData.icon}
                  alt="weather icon"
                />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">
                  <a href=" " className="active">
                    °C
                  </a>{" "}
                  |<a href=" ">°F</a>
                </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="flow-left">
                <ul>
                  <li>
                    Wind speed: 
                    <span className="wind-speed"> {weatherData.wind}</span> km/h
                  </li>
                  <li>
                    Humidity:
                    <span className="humidity"> {weatherData.humidity}</span>%
                  </li>
                  <li className="text-capitalize">
                    <span className="description">
                      {weatherData.description}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </div>
    </div>
);
} else {
  const apiKey = "3b0ffc0f73dbf8aed77c35d6e45972de";
  let city = "Warsaw";
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