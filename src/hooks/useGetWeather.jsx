import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(false) 
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async() => {
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=aad0asdfsa7f4f914f0a068basdfasfeafdasfad6580a972f5e28&units=metric`)   //  Give Correct Api In Here ->  This is Wrong Api
    const data = await res.json()
    setWeather(data);
    setLoading(false)
    console.log(loading);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async() => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError(true);
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