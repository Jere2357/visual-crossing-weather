import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Image, View } from "react-native";

import Header from "../globals/header/Header";
import SearchBar from "../globals/input/SearchInput";
import CardItem from "../globals/card/Card";

import { apiForeCastDetails } from "../request/WeatherApi";

import { capitalize } from "../globals/Helpers";

import styles from "./styles/ContainerStyles";

const Container = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [actualWeather, setActualWeather] = useState({});

  const handleGetWeatherForecast = async (value: any) => {
    setIsLoading(true);

    const apiResponse = await apiForeCastDetails(value);

    if (typeof apiResponse.data !== "undefined") {
      const { data, status } = apiResponse;

      if (status === 200) {
        setIsLoading(false);
        setActualWeather(data);
        console.log("Get Forecast Rest API Response: ", data);
      } else {
        setIsLoading(false);
        setActualWeather({});
      }
    }
  };

  const handleChangeSearch = (value: any) => {
    setSearch(value);
    handleGetWeatherForecast(value);
  };

  return (
    <SafeAreaView>
      <Header />
      <SearchBar value={search} onSearch={handleChangeSearch} />

      {/* Weather card section */}
      {actualWeather.hasOwnProperty("temp") ? (
        <CardItem>
          <Text style={styles.city}>{capitalize(search)}</Text>
          <Text style={styles.temp}>{actualWeather.temp}°C</Text>
          <Text style={styles.duration}>High: {actualWeather.max_temp}°C</Text>
          <Text style={styles.duration}>Low: {actualWeather.min_temp}°C</Text>
          <Text style={styles.feels}>
            Feels like {actualWeather.feels_like}°C
          </Text>
        </CardItem>
      ) : (
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/logo-cloud.png")}
            style={styles.cloudIcon}
          />
          <Text style={styles.cloudIconLabel}>
            Search a city to see the current weather forecast
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Container;
