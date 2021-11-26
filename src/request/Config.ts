import React from "react";

const hosts = {
  WEATHER_URL: "https://weather-by-api-ninjas.p.rapidapi.com",
};

export const API_URL = hosts.WEATHER_URL + "/v1"; // host url value

export const HEADERS = {
  headers: {
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
    "x-rapidapi-key": "960a710699msh72dad673d1d91b3p1dd29cjsn117a9a34d859",
  },
};
