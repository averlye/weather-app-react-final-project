import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview.js";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
  }
    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast">
        <div className="row">
        <WeatherForecastPreview data={forecast.list[0]}/>
        <WeatherForecastPreview data={forecast.list[1]}/>
        <WeatherForecastPreview data={forecast.list[2]}/>
        <WeatherForecastPreview data={forecast.list[3]}/>
        </div>
        </div>
        )
    } else {
    const apiKey = "3b0ffc0f73dbf8aed77c35d6e45972de";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleForecast);

    return null;
    }
}