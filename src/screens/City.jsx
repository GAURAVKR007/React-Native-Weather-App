import React from 'react'
import { Text, View, SafeAreaView , StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ImageBackground
        source={require('../../assets/City-background.jpg')}
        style={styles.image}
        >
        <Text style={[styles.cityName, styles.cityText]}>Patna</Text>
        <Text style={[styles.countryName, styles.cityText]}>INDIA</Text>
        <View style={styles.populationWrapper}>
            <Feather name="user" size={50} color="red" />
            <Text style={styles.populationText}>80000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
            <Feather name="sunrise" size={50} color="white" />
            <Text style={styles.riseSetText}>10:46:58am</Text>
            <Feather name="sunset" size={50} color="white" />
            <Text style={styles.riseSetText}>17:28:57pm</Text>
        </View>
        </ImageBackground>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // marginTop: StatusBar.currentHeight || 0
    },
    image : {
        flex: 1
    },
    cityName : {
        fontSize: 40
    },
    countryName : {
        fontSize: 50
    },
    cityText : {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
        color: "white"
    },
    populationWrapper : {
        flexDirection: "row",
        alignItems : "center",
        justifyContent : "center",
        marginTop : 30
    },
    populationText : {
        fontSize : 25,
        marginLeft : 7.5,
        color : "red",
        fontWeight : "bold"
    },
    riseSetWrapper : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around",
        marginTop : 30
    },
    riseSetText : {
        fontSize: 20,
        color : "white",
        fontWeight : "bold"
    }
})

export default City