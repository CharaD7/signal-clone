/* eslint-disable @typescript-eslint/no-use-before-define */
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import chatRoomData from '~assets/dummy-data/Chats';
import colors from '~components/Colors';
import Message from '~components/Message';
import MessageInput from '~components/MessageInput';

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        inverted
        renderItem={({ item }) => <Message message={item} />}
      />
      <MessageInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default ChatRoomScreen;
