import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Number = (props) => {
    return (  
        <View style={styles.summaryContainerView}>
            <Text style={styles.summaryContainerViewText}>{props.number}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    summaryContainerView: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        width: '60%',
        marginVertical: 10,
        backgroundColor: '#e9c4c4'
    },
    summaryContainerViewText: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    }
});
 
export default Number;