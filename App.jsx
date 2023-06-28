import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading , error , weather] = useGetWeather();


  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="black" />
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator 
        size={100}
        color="#0000ff"
        />) }
        { weather && weather.list && !loading &&
         <NavigationContainer>
          <Tabs weather={weather}/>
          </NavigationContainer>
        }
        {error && <ErrorItem />}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center"
  }
})

export default App;