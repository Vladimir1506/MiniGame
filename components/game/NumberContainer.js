import { StyleSheet, Text, View } from "react-native"

import Colors from "../../constants/Colors"
import { Dimensions } from "react-native"
import React from "react"

const NumberContainer = ({ children }) =>
    <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </View>
export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        // padding: 24,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: 24,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    },
})