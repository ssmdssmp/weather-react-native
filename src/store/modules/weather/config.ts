import {Env} from '../../../config';
import {TWeatherData} from './types';

export const CURRENT_WEATHER_URL = {
  getWeather: (locationQuery: string) =>
    `http://api.weatherapi.com/v1/forecast.json?key=${
      Env.WEATHER_API_KEY || '7912003338fb49e795153939232002'
    }&q=${locationQuery}&days=3&aqi=no&alerts=no`,
  // `http://api.weatherapi.com/v1/current.json?key=${Env.WEATHER_API_KEY}&q=${locationQuery}&aqi=no`
};
export const GET_IP_URL = {
  getIP: () =>
    `http://ip-api.com/json
    `,
};

export const initWeatherData: TWeatherData = {
  location: {
    name: '',
    region: '',
    country: '',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime_epoch: 0,
    localtime: '',
  },
  current: {
    last_updated_epoch: 0,
    last_updated: '',
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: '',
      icon: '',
      code: 0,
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  },
  forecast: {
    forecastday: [
      {
        date: '',
        date_epoch: 0,
        day: {
          maxtemp_c: 0,
          maxtemp_f: 0,
          mintemp_c: 0,
          mintemp_f: 0,
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_mph: 0,
          maxwind_kph: 0,
          totalprecip_mm: 0,
          totalprecip_in: 0,
          totalsnow_cm: 0,
          avgvis_km: 0,
          avgvis_miles: 0,
          avghumidity: 0,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: '',
            icon: '',
            code: 1003,
          },
          uv: 0,
        },
        astro: {
          sunrise: '',
          sunset: '',
          moonrise: '',
          moonset: '',
          moon_phase: '',
          moon_illumination: '',
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [],
      },
      {
        date: '',
        date_epoch: 0,
        day: {
          maxtemp_c: 0,
          maxtemp_f: 0,
          mintemp_c: 0,
          mintemp_f: 0,
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_mph: 0,
          maxwind_kph: 0,
          totalprecip_mm: 0,
          totalprecip_in: 0,
          totalsnow_cm: 0,
          avgvis_km: 0,
          avgvis_miles: 0,
          avghumidity: 0,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: '',
            icon: '',
            code: 1003,
          },
          uv: 0,
        },
        astro: {
          sunrise: '',
          sunset: '',
          moonrise: '',
          moonset: '',
          moon_phase: '',
          moon_illumination: '',
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [],
      },
    ],
  },
};
