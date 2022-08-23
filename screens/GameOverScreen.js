import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import Colors from "../constants/Colors"
import { Dimensions } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import React from "react"
import Title from "../components/ui/Title"
import { useWindowDimensions } from "react-native"

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions()
    return <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, (width > height) ? styles.imageContainerWide : styles.imageContainerThin]}>
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
    </ScrollView >
}
export default GameOverScreen

const styles = StyleSheet.create({
    screen: { flex: 1 },
    rootContainer: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderColor: Colors.primary800,
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: 20,
        alignItems: 'center'
    },
    imageContainerThin: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    imageContainerWide: {
        width: 150,
        height: 150,
        borderRadius: 75
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