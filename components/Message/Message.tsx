/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '~components/Colors';

const myID = 'u1';

const Message = ({ message }) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? colors.graybg : colors.badgebg,
          marginLeft: isMe ? 'auto' : 10,
          marginRight: isMe ? 10 : 'auto',
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
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
    marginRight: 'auto',
  },
  text: {
    color: colors.white,
  },
});
