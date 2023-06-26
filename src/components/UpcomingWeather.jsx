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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  img: {
    flex: 1,
  },
});

export default UpcomingWeather;
