import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState();

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data);
      });
  }, [country]);

  if (weather) {
    return (
      <div>
        <h2>Forecast for {country.capital}</h2>
        <p>Temperature is currently {weather.main.temp} °C </p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p>
          {weather.weather[0].main}, wind {weather.wind.speed} m/s
        </p>
      </div>
    );
  }
};

export default Weather;
