import { ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setIsGameOver] = useState(true)
  const [roundsNumber, setRoundsNumber] = useState(0)
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(parseInt(pickedNumber))
    setIsGameOver(false)
  }
  const gameOverHandler = (number) => {
    setIsGameOver(true)
    setRoundsNumber(number)
  }
  const startnewGameHandler = () => {
    setUserNumber(null)
  }
  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />
  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  if (isGameOver && userNumber) screen = <GameOverScreen
    roundsNumber={roundsNumber}
    userNumber={userNumber}
    onStartNewGame={startnewGameHandler}
  />

  return (<LinearGradient
    colors={[Colors.primary800, Colors.accent500]}
    style={styles.rootScreen}>
    <ImageBackground
      source={require('./assets/images/dices.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.imageBackground}>
      {screen}
    </ImageBackground>
  </LinearGradient>)
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25
  }
})

export default App;