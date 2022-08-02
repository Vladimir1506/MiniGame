import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import Card from '../components/ui/Card';
import Colors from '../constants/Colors';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const changeInputTextHandler = text => {
    setEnteredNumber(text)
  }
  const confirmBtnHandler = () => {
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'OK', style: 'destructive', onPress: resetBtnHandler }]
      )
      return
    }
    onConfirmNumber(enteredNumber)
  }
  const resetBtnHandler = () => {
    setEnteredNumber('')
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.inputText}
          maxLength={2} autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          value={enteredNumber}
          onChangeText={changeInputTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetBtnHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmBtnHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  inputText: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 4,
    fontSize: 26,
    height: 50,
    width: 50,
    color: Colors.accent500,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});

export default StartGameScreen;
