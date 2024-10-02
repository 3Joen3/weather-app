import { useEffect, useState } from "react";
import { IOpenWeatherResponse, IWeatherData } from "../types";
import { API_KEY } from "@env";

export function useWeather(latitude: number | null, longitude: number | null) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

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
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);

      if (response.status === 404) {
        setErrorMessage(`City ${city} could not be found.`)
        return;
      }

      if (!response.ok) {
        throw new Error("Something went wrong fetching weather data.");
      }

      const data = await response.json();
      setWeatherData(mapData(data));
      setErrorMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  return { weatherData, fetchWeatherDataByCity, errorMessage };
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
