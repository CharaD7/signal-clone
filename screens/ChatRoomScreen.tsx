/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '~components/Colors';
import Message from '~components/Message/Message';

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <Message />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default ChatRoomScreen;
