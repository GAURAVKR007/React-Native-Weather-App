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
import { Feather } from "@expo/vector-icons";

const Data = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_max: 298.24,
      temp_min: 296.34,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 17:00:00",
    main: {
      temp_max: 298.24,
      temp_min: 296.34,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_max: 298.24,
      temp_min: 296.34,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 19:00:00",
    main: {
      temp_max: 298.24,
      temp_min: 296.34,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const UpcomingWeather = () => {
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
          <Text>Upcoming Weather</Text>

          <FlatList
            data={Data}
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
