import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import styles from './styles';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = () => {
    console.warn(`Sending message: ${message}`);
    setMessage('');
  };

  const onPlusClicked = () => {
    console.warn('On Plus clicked');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="happy-outline" size={24} color={colors.blackTint} />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Signal message..."
        />
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
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {!message ? (
          <AntDesign name="plus" size={24} color={colors.white} />
        ) : (
          <Ionicons name="ios-send" size={24} color={colors.white} />
        )}
      </Pressable>
    </View>
  );
};

export default MessageInput;
