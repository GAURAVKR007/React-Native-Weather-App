import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  View,
  Image,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/light-back.jpg")}
          style={styles.img}
        >

          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  img: {
    flex: 1,
  },
});

export default UpcomingWeather;
