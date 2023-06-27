import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
  const { main: {temp, feels_like, temp_max , temp_min}, weather } = weatherData;

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[styles.wrapper,{backgroundColor : weatherType[weatherCondition]?.backgroundColor}]}>
    <View style={styles.container}>
    <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
      <Text style={styles.temp}>{`  ${temp}°`}</Text>
      <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
      <RowText 
      messageOne={`High : ${temp_max}° / `}
      messageTwo={` Low : ${temp_min}°`}
      containerStyles={styles.highLowWrapper}
      messageOneStyle={styles.highLow}
      messageTwoStyle={styles.highLow}
      />
      </View>
      <RowText 
      messageOne={weather[0].description}
      messageTwo={weatherType[weatherCondition]?.message}
      containerStyles={styles.bodyWrapper}
      messageOneStyle={styles.description}
      messageTwoStyle={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    padding: 10,
  },
  container : {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper : {
    flexDirection : "row"
  },
  bodyWrapper : {
    justifyContent : "flex-end",
    alignItems: "flex-start",
    paddingLeft: 10,
    marginBottom: 20
  },
  description: {
    fontSize: 40
  },
  message: {
    fontSize : 24
  }

});


export default CurrentWeather;