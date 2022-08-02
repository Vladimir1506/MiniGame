import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import React from "react";

const GuessLogItem = ({ roundNumber, guess }) => (
    <View style={styles.item}>
        <Text style={styles.text}>#{roundNumber}</Text>
        <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
)

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.accent500
    },
    text: {
        fontFamily: 'OpenSans-Regular',
    }
})

export default GuessLogItem