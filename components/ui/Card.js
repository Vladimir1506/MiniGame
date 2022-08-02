import { StyleSheet, View } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"

const Card = ({ children }) =>
    <View style={styles.card}>{children}</View>

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 30,
        // marginBottom: 20,
        padding: 16,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 15,
        elevation: 5,
    },
})
export default Card