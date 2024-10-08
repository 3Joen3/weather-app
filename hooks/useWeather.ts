import { useEffect, useState } from "react";
import {
  ICurrentWeatherResponse,
  IOpenWeatherResponse,
  IWeatherData,
} from "../types/types";
import { API_KEY } from "@env";

export function useWeather(latitude: number | null, longitude: number | null) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      if (latitude && longitude) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        const data = await fetch(url).then((response) => response.json());
        setWeatherData(mapData(data));
      }
    })();
  }, [latitude, longitude]);

  async function fetchWeatherDataByCity(
    city: string,
    needsCurrentWeather: boolean = false
  ) {
    if (!city) {
      console.log("Need city to search weather.");
      return;
    }

    const url = needsCurrentWeather
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);

      if (response.status === 404) {
        setErrorCode(404);
        return;
      }

      if (!response.ok) {
        throw new Error("Something went wrong fetching weather data.");
      }

      const data = await response.json();
      setWeatherData(
        needsCurrentWeather ? mapCurrenWeather(data) : mapData(data)
      );
      setErrorCode(null);
    } catch (error) {
      console.error(error);
    }
  }

  return { weatherData, fetchWeatherDataByCity, errorCode };
}

function mapData(apiCall: IOpenWeatherResponse): IWeatherData {
  return {
    city: apiCall.city.name,
    forecasts: apiCall.list.map((apiForecast, index: number) => ({
      id: index.toString(),
      time: new Date(apiForecast.dt * 1000),
      degreesCelsius: Math.round((apiForecast.main.temp - 273.15) / 0.5) * 0.5,
      description: apiForecast.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${apiForecast.weather[0].icon}@2x.png`,
    })),
  };
}

function mapCurrenWeather(apiCall: ICurrentWeatherResponse) {
  return {
    city: apiCall.name,
    forecasts: [
      {
        id: "1",
        time: new Date(apiCall.dt * 1000),
        degreesCelsius: Math.round((apiCall.main.temp - 273.15) / 0.5) * 0.5,
        description: apiCall.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${apiCall.weather[0].icon}@2x.png`,
      },
    ],
  };
}
