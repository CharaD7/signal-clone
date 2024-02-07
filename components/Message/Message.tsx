/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Text, View } from 'react-native';

import colors from '~components/Colors';

// eslint-disable-next-line import/order
import styles from './styles';

const myID = 'u1';

const Message = ({ message }) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
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
