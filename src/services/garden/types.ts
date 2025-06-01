export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
}

export interface WeatherData {
  weather: WeatherCondition[];
  main: CurrentWeather;
  wind: WeatherWind;
  dt: number;
  name: string;
  sys: {
    country: string;
  };
}

export interface ForecastItem {
  dt: number;
  main: CurrentWeather;
  weather: WeatherCondition[];
  wind: WeatherWind;
  dt_txt: string;
}

export interface ForecastData {
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    country: string;
  };
}

export interface ProcessedWeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  forecast: Array<{
    day: string;
    temp: number;
    condition: string;
    icon: string;
  }>;
}