export interface IOpenWeatherResponse {
  city: {
    name: string;
  };
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    pop: number;
  }[];
}

export interface IWeatherData {
  city: string;
  forecasts: Forecast[]
}

interface Forecast{
  time: Date,
  degreesCelsius: number
  iconUrl: string
}

