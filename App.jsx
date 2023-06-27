import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [error, setError] = useState(null) 
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async() => {
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
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

  if(weather) {
    console.log(latitude, longitude);
    console.log(weather);
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
        size={100}
        color="#0000ff"
        />
      </View>
    )
  }


  return (
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center"
  }
})

export default App;