import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
      <p id="date"><FormatedDate date={props.data.date}/></p>
      <div className="row">
        <div className="col-sm-6">
        <div className="flow-right">
          <h1>{props.data.city}</h1>
          <img className="img-city-details" src={props.data.icon} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature}/>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="flow-left">
          <ul>
            <li>Wind speed: <span> {Math.round(props.data.wind)}</span> km/h
            </li>
            <li>
            Humidity: <span> {props.data.humidity}</span>%
            </li>
            <li className="text-capitalize"> 
            <span>{props.data.description}</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
);
}