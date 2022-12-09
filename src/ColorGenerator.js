import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity, Alert,ScrollView } from 'react-native';
import { FlatList } from "react-native";

const ColorGenerator = () => {

    const [newColor, setNewColor] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }
    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    // Alert.alert(randomColor());
                    setNewColor([...newColor, randomColor()])
                }}
            >
                <Text style={styles.textStyle}>Generate Random Color</Text>                   
            </TouchableOpacity>
           
            <FlatList data={newColor}
            keyExtractor = {(key)=>key}
                renderItem={({item}) => {
                    return (
                        <View style={styles.imageContainer}>
                            <View style ={{
                                backgroundColor : item,
                                height : 100,
                                borderRadius : 5,
                                marginTop : 5,
                                justifyContent : 'center',
                                alignItems : 'center',
                                width : '80%',
                            }}> 
                            
                            <Text
                                style={
                                    styles.textStyle }
                            >{item}</Text>
                            </View>
                        </View>
                    )
                }} />
                
        </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 80,
    },
    buttonStyle: {
        backgroundColor: '#00b0ff',
        color: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textStyle: {
        color: 'white',
        textTransform: 'capitalize',
        fontSize : 20,
    },
    imageContainer: {
        marginVertical: 20,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight : 'bold',
    }

});





export default ColorGenerator;