import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Ionicons }from '@expo/vector-icons'

import Number from '../components/Number';
import Card from '../components/Card';
import FlatButton from '../components/FlatButton';
import BodyText from '../components/BodyText';


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
    const initialGuess = generateRandomNumBetween(1, 100, userChoice);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userChoice) {
            onGameOver(pastGuesses.length);
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
                currentLow.current = currentGuess + 1;
                break;
        }
        const nextGeneratedNum = generateRandomNumBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGeneratedNum);
        setPastGuesses((currentPastGuesses) => {
            return [nextGeneratedNum,...currentPastGuesses]
        })
    }
    
    return (  
        <View style={styles.screen}>
            <Text>Computers guess</Text>
            <Number number={currentGuess} />
            <Card style={styles.buttonContainer}>
                
                <View style={styles.button}>
                    <FlatButton 
                        text={<Ionicons name="md-remove" size={24}/>}
                        onPress={nextGuessHandler.bind(this, 'LOWER')}
                        style={{backgroundColor:"#F54052", padding: 12}}
                        textStyles={{fontSize: 15}}/>
                </View>
                <View style={styles.button}>
                    <FlatButton 
                        text={<Ionicons name="md-add" size={24}/>}
                        onPress={nextGuessHandler.bind(this, 'GREATER')}
                        style={{backgroundColor:"#3EB5AD", padding: 12}}
                        textStyles={{fontSize: 15}}/>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    keyExtractor={(item) => item.toString()}
                    data={pastGuesses}
                    renderItem={
                        (guess) => (
                            <View key={guess} style={styles.listItem}>
                                <BodyText>#{pastGuesses.length - guess.index}</BodyText>
                                <BodyText>{guess.item}</BodyText>
                            </View>
                        )}/>
            </View>
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
    listItem: {
        borderColor: 'grey',
        padding: 15,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    listContainer: {
        flex: 1,
        marginTop: 20,
        width: '70%',
    },
    list: {
        flexGrow: 1
    }
});
 
export default GameScreen;