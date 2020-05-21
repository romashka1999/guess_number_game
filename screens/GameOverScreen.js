import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import BodyText from '../components/BodyText';
import FlatButton from '../components/FlatButton';

const GameOverScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>Game Is Over</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/original.png')} style={styles.image}/>
            </View>
            <View style={styles.body}>
                <BodyText style={{fontWeight: 'bold', fontSize: 20}}>User Number was: <Text style={{color: '#f7287b'}}>{props.userNumber}</Text></BodyText>
                <BodyText style={{fontWeight: 'bold', fontSize: 20}}>Number of Rounds: <Text style={{color: '#f7287b'}}>{props.rounds}</Text></BodyText>
            </View>
            <FlatButton 
                text="new game"
                onPress={props.onRestartGame}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        letterSpacing: 1,
        borderBottomColor: '#f7287b',
        borderBottomWidth: 7,
        paddingBottom: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }, 
    image: {
        width: '100%',
        height: '100%',
    },
    body: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 20,
        backgroundColor: 'white',
        marginBottom: 10
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden'
    }
});
 
export default GameOverScreen;