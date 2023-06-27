import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
    <Feather name="sun" size={100} color="black" />
      <Text style={styles.temp}>7</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <RowText 
      messageOne="High: 8 "
      messageTwo=" Low : 6"
      containerStyles={styles.highLowWrapper}
      messageOneStyle={styles.highLow}
      messageTwoStyle={styles.highLow}
      />
      </View>
      <RowText 
      messageOne={"Its Sunny"}
      messageTwo={weatherType['Rain'].message}
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
    backgroundColor: "pink"
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