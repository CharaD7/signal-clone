import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '~components/Colors/colors';

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
      <View style={styles.buttonContainer}>
        <Ionicons name="ios-send" size={24} color={colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: colors.graybg,
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.badgebg,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageInput;
