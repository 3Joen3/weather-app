import { useEffect, useState } from "react";
import { IOpenWeatherResponse, IWeatherData } from "../types";
import { API_KEY } from "@env";

export function useWeather(latitude: number | null, longitude: number | null) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    (async () => {
      if (latitude && longitude) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        const data = await fetch(url).then((response) => response.json());
        setWeatherData(mapData(data));
      }
    })();
  }, [latitude, longitude]);

  async function fetchWeatherDataByCity(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fe215cac13d63320405264414e4fffb4`;
    const data = await fetch(url).then((response) => response.json());
    setWeatherData(mapData(data));
  }

  return { weatherData, fetchWeatherDataByCity };
}

function mapData(apiCall: IOpenWeatherResponse): IWeatherData {
  return {
    city: apiCall.city.name,
    forecasts: apiCall.list.map((apiForecast) => ({
      time: new Date(apiForecast.dt * 1000),
      degreesCelsius: Math.round((apiForecast.main.temp - 273.15) / 0.5) * 0.5,
      description: apiForecast.weather[0].description,
      iconUrl: apiForecast.weather[0].icon,
    })),
  };
}
