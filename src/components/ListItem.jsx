import React from "react";

import { View, Text, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
      <View style={styles.item}>
        <Feather name={weatherType[condition]?.icon} size={50} color={"white"} />
        <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={styles.temp}>{`${min}°/ ${max}°`}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred",
    },
    temp: {
      color: "white",
      fontSize: 20,
    },
    date: {
      color: "white",
      fontSize: 15,
    },
    dateTextWrapper : {
      flexDirection: "column",
    }
})

export default ListItem;