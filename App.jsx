import React from "react";
import { StyleSheet,SafeAreaView, View, Text, StatusBar } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

const App = () => {
  return (
    <>
    <StatusBar />
    <SafeAreaView style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <UpcomingWeather /> */}
      <City />
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;