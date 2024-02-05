import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '~components/Colors/colors';

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="happy-outline" size={24} color={colors.blackTint} />
        <TextInput style={styles.input} />
        <Feather
          name="camera"
          size={24}
          color={colors.blackTint}
          style={styles.icon}
        />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          style={styles.icon}
          color={colors.blackTint}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AntDesign name="plus" size={24} color={colors.white} />
        {/* <Ionicons name="ios-send" size={24} color={colors.white} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 3,
  },
  input: {
    flex: 1,
    marginHorizontal: 3,
  },
  inputContainer: {
    backgroundColor: colors.graybg,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  buttonContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.badgebg,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageInput;
