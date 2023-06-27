import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading , error , weather] = useGetWeather()


  if(weather && weather.list) {
    return (
    <NavigationContainer>
    <Tabs weather={weather}/>
    </NavigationContainer>
    )
  }


  return (
    <View style={styles.container}>
        <ActivityIndicator 
        size={100}
        color="#0000ff"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center"
  }
})

export default App;