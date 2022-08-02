import { Image, StyleSheet, Text, View } from "react-native"

import Colors from "../constants/Colors"
import PrimaryButton from "../components/ui/PrimaryButton"
import React from "react"
import Title from "../components/ui/Title"

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/win.png')} />
        </View>
        <View>
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.highlight}> {roundsNumber} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {userNumber} </Text>.
            </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderColor: Colors.primary800,
        borderWidth: 3,
        width: 380,
        height: 380,
        borderRadius: 190,
        overflow: 'hidden',
        marginVertical: 20,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    highlight: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.primary500
    },
})
export default GameOverScreen