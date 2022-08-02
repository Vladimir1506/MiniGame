import { StyleSheet, Text } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"

const InstructionText = ({ children, style }) =>
    <Text style={[styles.instructionText, style]}>{children}</Text>

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        marginTop: 20,
        fontFamily: 'OpenSans-Regular'
    },
})

export default InstructionText