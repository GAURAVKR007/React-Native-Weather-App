import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
    <Feather name="sun" size={100} color="black" />
      <Text style={styles.temp}>7</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <View style={styles.highLowWrapper}>
      <Text style={styles.highLow}>High: 8 </Text>
      <Text style={styles.highLow}> Low : 6</Text>
      </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its Perfect t-shirt weather</Text>
      </View>
    
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