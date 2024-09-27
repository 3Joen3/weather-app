import { useEffect, useState } from "react";
import { IWeatherData } from "../types";
import { API_KEY } from "@env";

export function useWeather(latitude: number | null, longitude: number | null) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  useEffect(() => {
    (async () => {
      if(latitude && longitude)
{      setWeatherData(await fetch(url).then((response) => response.json()));}
    })();
  }, [latitude, longitude]);

  return weatherData;
}
