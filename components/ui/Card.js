import { Dimensions, StyleSheet, View } from "react-native"

import Colors from "../../constants/Colors"
import React from "react"
import { useWindowDimensions } from "react-native"

const Card = ({ children }) => {
    const { width, height } = useWindowDimensions()
    const cardWidth = width > 500 ? width * 0.7 : width * 0.8
    return <View style={[styles.card, { width: cardWidth }]}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 15,
        elevation: 5,
    },
})