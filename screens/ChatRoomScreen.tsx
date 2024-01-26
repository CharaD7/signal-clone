/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import chatRoomData from '~assets/dummy-data/Chats';
import colors from '~components/Colors';
import Message from '~components/Message/Message';

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        inverted
        renderItem={({ item }) => <Message message={item} />}
      />
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
