import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react'

import Card from "../components/ui/Card";
import Colors from "../constants/Colors";
import GuessLogItem from "../components/game/GuessLogItem";
import Icon from 'react-native-vector-icons/Ionicons';
import InstructionText from "../components/ui/InstructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title'
import { useWindowDimensions } from "react-native";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions();

    const guessRoundsLength = guessRounds.length
    useEffect(() => {
        if (currentGuess === userNumber) onGameOver(guessRounds.length)
    }, [currentGuess, userNumber, onGameOver])
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie, please!", 'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Lower or Higher?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Icon name="remove-circle-outline" size={30} color={Colors.accent500} />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Icon name="add-circle-outline" size={30} color={Colors.accent500} />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>
    if (width > height) {
        content = <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Icon name="remove-circle-outline" size={30} color={Colors.accent500} />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Icon name="add-circle-outline" size={30} color={Colors.accent500} />
                    </PrimaryButton>
                </View>
            </View>
        </>
    }
    return < View style={styles.screen} >
        <Title>Opponent's GUESS</Title>
        {content}
        <View style={styles.listContainer}>
            <FlatList
                data={guessRounds}
                renderItem={(guessData) => <GuessLogItem roundNumber={guessRoundsLength - guessData.index}
                    guess={guessData.item} />}
                keyExtractor={(item) => item} />
        </View>
    </View >
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 10
    }
})
export default GameScreen
