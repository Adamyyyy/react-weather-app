import "./SearchCity.css";
import { useState } from "react";
import { fetchWeatherByCity } from "../../../services/weatherService";

const SearchCity = ({ search }) => {
  const [city, setCity] = useState("");

  const onCityChangeHandler = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSearchCityHandler = async (event) => {
    event.preventDefault();

    if (!city) {
      // TODO:ERROR handling
      return;
    }
    const weatherData = await fetchWeatherByCity(city);

    search(weatherData);
  };
  return (
    <form onSubmit={onSearchCityHandler}>
      <input
        type="text"
        placeholder="Search a city ..."
        value={city}
        onChange={onCityChangeHandler}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchCity;
