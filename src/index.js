import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Open-source code by {""}
          <a href="https://github.com/hani-slh/react-weather-project">
            Haniye Salehi
          </a>
        </footer>
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();
