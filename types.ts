export interface IWeatherData {
    city: {
      name: string;
    };
    list: {
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
      };
      pop: number;
    }[];
  }