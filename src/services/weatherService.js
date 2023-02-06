const API_KEY = "2dcd2f9206e44679a1194856230402";
const FETCH_CITY_WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);

  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("api", "false");

  const response = await fetch(url);
  const data = await response.json();
  
  return data;
};
