/* eslint-disable @typescript-eslint/no-use-before-define */
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import chatRoomData from '~assets/dummy-data/Chats';
import Message from '~components/Message';
import MessageInput from '~components/MessageInput';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  console.log(`Route data: ${route.params?.id}`);
  console.log(`Route specified content: ${route.name}`);

  navigation.setOptions({ title: 'Elon Musk' });

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
    flex: 1,
  },
});

export default ChatRoomScreen;
