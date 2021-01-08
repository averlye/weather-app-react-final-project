import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div className="city-details">
    <p id="date"><FormatedDate date={props.data.date}/></p>
    <div className="row">
    <div className="col-sm-6">
      <div className="flow-right">
        <h1>{props.data.city}</h1>
        <img src={props.data.icon} alt="weather icon" />
        <span className="temperature">{Math.round(props.data.temperature)}</span>
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
          <li>Wind speed: <span className="wind-speed"> {props.data.wind}</span> km/h
          </li>
          <li>
            Humidity: <span className="humidity"> {props.data.humidity}</span>%
          </li>
          <li className="text-capitalize"> 
          <span className="description">{props.data.description}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
</div>
</div>
);
}