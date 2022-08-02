import { StyleSheet, Text } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"

const Title = ({ children }) =>
    <Text style={styles.title}>{children}</Text>


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: Colors.accent500,
        borderRadius:20,
        padding: 10,
        textAlignVertical: 'center',
        fontFamily:'OpenSans-Bold'
    }
})

export default Title