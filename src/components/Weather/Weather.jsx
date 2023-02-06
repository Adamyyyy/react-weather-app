import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Weather.css";
import { useState } from "react";
import SearchCity from "./SearchCity/SearchCity";
import WeatherResult from "./WeatherResult/WeatherResult";

const Weather = () => {
  const [weather, setWeather] = useState();

  const onSearch = (weatherData) => {
    setWeather(weatherData);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <h1>JR Weather App</h1>
        </Card.Header>
        <Card.Body>
          <SearchCity search={onSearch} />
          {weather && <WeatherResult weather={weather} />}
        </Card.Body>
        <Card.Footer className="text-muted">By Adam Yang</Card.Footer>
      </Card>
    </>
  );
};

export default Weather;
