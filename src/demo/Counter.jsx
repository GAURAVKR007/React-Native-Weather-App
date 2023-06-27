import React, {useEffect} from 'react'
import { View, Text, Button , TouchableOpacity , StyleSheet, SafeAreaView } from 'react-native'

function Counter() {
    
    const [count,setCount] = React.useState(0);

    useEffect(()=> {
        console.log(`Counter: ${count}`);

        return () => {
            console.log("UseEffect Cleanup");
        }
    },[count])

  return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>{`Count : ${count}`}</Text>
                <View style={styles.fixToText}>
                <Button 
                color={'blue'}
                title={"Increase"}
                touchSoundDisabled={false}
                onPress={()=> {
                    setCount(count => count + 1)
                    console.log(count);
                }}
                />
                
                <Button 
                color={'green'}
                title={"Decrease"}
                onPress={()=>{
                    setCount(count => count - 1)
                }}
                />
                </View>
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
    },
    title : {
        alignSelf: "center",
        fontSize: 25,
        marginTop: 25,
        marginBottom : 50
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default Counter