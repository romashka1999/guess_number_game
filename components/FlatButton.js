import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


const FlatButton = ({ text, style, onPress, textStyles}) => {
    return (  
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.button, ...style}}>
                <Text style={{...styles.text, ...textStyles}}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles =  StyleSheet.create({
    button: {
        borderRadius: 20,
        borderWidth: 2,
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'green',
    },
    text: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        letterSpacing: 1
    }
});
 
export default FlatButton;