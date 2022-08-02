import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import React from 'react';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.textButton}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    margin: 4,
    borderRadius: 30,

  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6,

  },
  textButton: {
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
export default PrimaryButton;
