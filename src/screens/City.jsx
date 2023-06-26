import React from 'react'
import { Text, View, SafeAreaView , StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { Feather } from "@expo/vector-icons";
import IconText from '../components/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
        source={require('../../assets/City-background.jpg')}
        style={styles.image}
        >
        <View style={styles.content}>
        <Text style={[styles.cityName, styles.cityText]}>Patna</Text>
        <Text style={[styles.countryName, styles.cityText]}>INDIA</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
            <IconText 
            iconName={'user'} 
            iconColor = "red"
            bodyText={80000}
            bodyTextStyle={styles.populationText}
            />
        </View>
        <View style={[styles.riseSetWrapper , styles.rowLayout]}>
            <IconText 
            iconName="sunrise"
            iconColor="white"
            bodyText="10:46:58am"
            bodyTextStyle={styles.riseSetText}
            />
            <IconText 
            iconName="sunset"
            iconColor="white"
            bodyText="17:28:57pm"
            bodyTextStyle={styles.riseSetText}
            />
        </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // justifyContent: "center",
        // alignItems: "center"
        // marginTop: StatusBar.currentHeight || 0
    },
    content : {
        flex : 1,
        justifyContent: "center",
        // alignItems: "center"
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
        justifyContent : "center",
        marginTop : 30
    },
    populationText : {
        fontSize : 25,
        marginLeft : 7.5,
        color : "red",
    },
    riseSetWrapper : {
        justifyContent : "space-around",
        marginTop : 30,
    },
    riseSetText : {
        fontSize: 20,
        color : "white",
    },
    rowLayout : {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default City