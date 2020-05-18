import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import Number from '../components/Number';
import Card from '../components/Card';

const generateRandomNumBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;
    if(random == exclude) {
        return generateRandomNumBetween(min, max, exclude);
    } else {
        return random;
    }
}

const GameScreen = (props) => {
    const { userChoice, onGameOver } = props;

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumBetween(1, 100, userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if((direction === 'LOWER' && currentGuess < userChoice) || (direction === 'GREATER' && currentGuess > userChoice)) {
            Alert.alert(
                'Dont Lie :)', 
                'You know this is wrong', 
                [{ text: 'Sorry', style: 'cancel' }]
            );
            return;
        }
        switch (direction) {
            case 'LOWER':
                currentHigh.current = currentGuess;
                break;
            case 'GREATER':
                currentLow.current = currentGuess;
                break;
        }
        const nextGeneratedNum = generateRandomNumBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGeneratedNum);
        setRounds((currentRounds) => {
            return currentRounds + 1; 
        });
    }
    
    return (  
        <View style={styles.screen}>
            <Text>Computers guess</Text>
            <Number number={currentGuess} />
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        title="lower"
                        color="#F54052"
                        onPress={nextGuessHandler.bind(this, 'LOWER')} />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="greater"
                        color="#3EB5AD" 
                        onPress={nextGuessHandler.bind(this, 'GREATER')} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%'
    },
    button: {
        width: 110,
    },
});
 
export default GameScreen;