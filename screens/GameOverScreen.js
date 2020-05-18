import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <Text>Game is Over</Text>
            <Text>User Number was: {props.userNumber}</Text>
            <Text>Number of Rounds: {props.rounds}</Text>
            <Button 
                title="New Game"
                onPress={props.onRestartGame}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default GameOverScreen;