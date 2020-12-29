import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" class="search-button" value="🔎" />
            <button>Search for current location</button>
        </form>
        <div className="city-details">
            <p id="date">29 Dec 2020, 19:41</p>
            <div className="row">
            <div className="col-sm-6">
              <div className="flow-right">
                <h1>Warsaw</h1>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="weather icon"
                />
                <span className="temperature">0</span>
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
                    <span className="wind-speed">4</span> km/h
                  </li>
                  <li>
                    Humidity:
                    <span className="humidity">87</span>%
                  </li>
                  <li>
                    <span className="description">
                      Cloudy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </div>
    </div>
);
}