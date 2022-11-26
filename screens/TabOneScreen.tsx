import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import chatRoomsData from '../assets/dummy-data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItem';
import colors from '../components/Colors';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}
