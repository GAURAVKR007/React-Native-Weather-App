import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
    <Tab.Navigator
    screenOptions={{
      lazy : true, // Load tab screens lazily
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarStyle : {
        backgroundColor: "black"
      },
      headerStyle : {
        backgroundColor : "black"
      },
      headerTitleStyle : {
        fontWeight : "bold",
        fontSize : 25,
        color: "tomato"
      }
    }}
    >
      <Tab.Screen
       name={"Current"} 
       component={CurrentWeather} 
       options={{
        tabBarIcon: ({focused}) => (
        <Feather name="droplet" size={25} color={focused ? "tomato" : "white"} />
        )
       }}
       />

      <Tab.Screen 
      name={"Upcoming"} 
      component={UpcomingWeather} 
      options={{
        tabBarIcon: ({focused}) => (
          <Feather name="clock" size={25} color={focused ? "tomato" : "white"} />
        )
      }}
      />

      <Tab.Screen 
      name={"City"} 
      component={City} 
      options={{
        tabBarIcon : ({focused}) => (
          <Feather name="home" size={25} color={focused ? "tomato" : "white"} />
        )
      }}
      />

    </Tab.Navigator>
    )
}

export default Tabs
