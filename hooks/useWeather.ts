import { useEffect, useState } from "react";
import { IWeatherData } from "../types";
import { API_KEY } from "@env";

export function useWeather(latitude: number | null, longitude: number | null) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    (async () => {
      if (latitude && longitude) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        setWeatherData(await fetch(url).then((response) => response.json()));
      }
    })();
  }, [latitude, longitude]);

  async function fetchWeatherDataByCity(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe215cac13d63320405264414e4fffb4`;
    setWeatherData(await fetch(url).then((response) => response.json()));
  }

  return { weatherData, fetchWeatherDataByCity };
}
