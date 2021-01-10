import React from "react";

export default function WeatherForecastPreview(props) {

    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours()
        return `${hours}:00`;
    }
    function temperature () {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°C`;
    }
    function icon() {
        let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`;
        let alt = props.data.weather[0].description;

        return <img className="img-icon-forecast" src={icon} alt={alt}/>;
    }

    return (
    <div className="WeatherForecastPreview">
        <div className="row">
        <div className="col-sm-3">
        <span className="center">{hours()}</span>
        <span>{icon()}</span>
        <span className="center">{temperature()}</span>
        </div>
        </div>
    </div>
    )
}