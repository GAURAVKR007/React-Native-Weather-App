import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [error, setError] = useState(null) 
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async() => {
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const data = await res.json()
    setWeather(data);
    setLoading(false)
    } catch (error) {
      setError("Error fetching weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      await fetchWeatherData()
    })();
  }, [latitude,longitude]);

  return [loading , error , weather]
}