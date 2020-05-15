import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

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

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumBetween(1, 100, props.userChoice));
    
    return (  
        <View style={styles.screen}>
            <Text>Computers guess</Text>
            <Number number={currentGuess} />
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        title="lower"
                        color="#F54052" />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="greater"
                        color="#3EB5AD" />
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