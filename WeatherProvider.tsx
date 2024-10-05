import React from "react";
import { createContext, ReactNode } from "react";
import { IWeatherData } from "./types/types";
import { useWeather } from "./hooks/useWeather";
import { useLocation } from "./hooks/useLocation";

interface ContextValue {
  weatherData: IWeatherData | null;
  fetchWeatherDataByCity: (city: string) => Promise<void>;
  errorMessage: string;
}

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherContext = createContext<ContextValue>({} as ContextValue);

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const location = useLocation();

  const { weatherData, fetchWeatherDataByCity, errorMessage } = useWeather(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );

  return (
    <WeatherContext.Provider
      value={{ weatherData, fetchWeatherDataByCity, errorMessage }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
