import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import { TEST_KEY } from '@env';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  // const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null) 
  console.log(TEST_KEY);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if(location) {
    // console.log(location);
  }

  // if(loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator 
  //       size={100}
  //       color="#0000ff"
  //       />
  //     </View>
  //   )
  // }


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