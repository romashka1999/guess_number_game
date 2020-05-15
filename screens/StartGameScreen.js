import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = (props) => {

    const [enteredNum, setEnteredNum] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNum, setSelectedNum] = useState(false);


    const numInputHandler = (inputText) => {
        const inputRegex = new RegExp('(^$|[1-9]{1}|[0-9]{2})');
        if(!inputRegex.test(inputText)) {
            Alert.alert(
                'Invalid Number', 
                'Allowed Numbers 1 - 99', 
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        };
        setEnteredNum(inputText);
    }

    const resetInputHandler = () => {
        setEnteredNum('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        if(enteredNum === '') {
            return;
        }
        setConfirmed(true);
        setSelectedNum(Number.parseInt(enteredNum));
        setEnteredNum('');
    }

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = <Text>You Chosen: {selectedNum}</Text>
    }

    return ( 
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2} 
                        onChangeText={numInputHandler}
                        value={enteredNum}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title="reset"  
                                color="#F54052" 
                                onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="confirm" 
                                color="#3EB5AD"
                                onPress={confirmInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback> 
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        marginVertical: 10  
    },
    button: {
        width: 110,
    },
    input: {
        width: 70,
        marginBottom: 20,
        textAlign: 'center'
    }
});
 
export default StartGameScreen;