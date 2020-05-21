import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}


export default function App() {

    // useEffect(() => {
    //     console.log(fontsLoaded);   
    // })
    
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    }

    const gameOverHandler = (numOfRounds) => {
        setGuessRounds(numOfRounds);
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>

    if(userNumber && guessRounds <=0) {
        content = <GameScreen 
                    userChoice={userNumber} 
                    onGameOver={gameOverHandler}/>
    } else if(guessRounds > 0) {
        content = <GameOverScreen 
                    rounds={guessRounds} 
                    userNumber={userNumber}
                    onRestartGame={configureNewGameHandler}/>
    }

    const appTitle = 'Guess Number Game';


    if(!fontsLoaded) {
        console.log('object');
        return (
            <AppLoading 
                startAsync={fetchFonts} 
                onFinish={() => setFontsLoaded(true)}
                onError={(err) => console.log(err)}/>
        );
    } else {
        return (
            <View style={styles.screen}>
                <Header title={appTitle} />
                {content}
            </View>
        );
    }  
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
