import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import chatRoomsData from '~assets/dummy-data/ChatRooms';
import ChatRoomItem from '~components/ChatRoomItem';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default function HomeScreen() {
  return (
    <View style={[styles.page]}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
