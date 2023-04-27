/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '~components/Colors';

const Message = () => {
  const isMe = true;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? colors.graybg : colors.badgebg,
          marginLeft: isMe ? 'auto' : 10,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isMe ? colors.black : colors.white,
          },
        ]}
      >
        Message
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  text: {
    color: colors.white,
  },
});

export default Message;
