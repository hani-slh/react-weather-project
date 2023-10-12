import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" vlaue="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York </h1>
        <ul>
          <li>Thursday 07:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="float-left"
              />
              <span className="temp">6</span> <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 70%</li>
              <li>Wind: 14 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
