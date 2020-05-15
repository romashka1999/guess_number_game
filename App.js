import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    
    const appTitle = 'Guess Number Game';
    
    return (
        <View style={styles.screen}>
            <Header title={appTitle} />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
