import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// pattern is to define a slice for the base server
// then endpoints within for all sub-URLs for REST services

// example of Mt Prospect
const NWSURL ='https://api.weather.gov/gridpoints/LOT/64,80/forecast';
const BASENWSURL = 'https://api.weather.gov/gridpoints';

interface WeatherPeriod {
    pNumber: number,
    name: string,
    startTime: Date,
    endTime: Date,
    isDayTime: boolean,
    temperture: number,
    tempUnitF: boolean,
    tempTrend: string,
    iconURL: URL,
    shortForecast: string,
    detailedForecast: string,
    windSpeed: string,
    windDirection: string,
};

interface WeatherAtLocation {
    location: string,
    generatedAt: Date,
    periods: WeatherPeriod[],
};

const weatherAPI = createApi({
    // when we attach to a redux store, where do we keep the data?
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASENWSURL, 
    }),
    endpoints (builder) {
        return {
            fetchWeather: nil, 
            });
        }
    }, 
});