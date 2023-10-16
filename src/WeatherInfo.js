import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  <div>
    <h1>{props.dat.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li>{props.data.describtion}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img src={props.data.icon} className="float-left" alt="Weather" />
          <span className="temp">{props.data.temperature}</span>{" "}
          <span className="unit">°C</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}</li>
          <li>Wind:{props.data.wind}</li>
        </ul>
      </div>
    </div>
  </div>;
}
