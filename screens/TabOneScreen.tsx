import { StyleSheet, View } from 'react-native';

import chatRoomsData from '../assets/dummy-data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItem';
// import EditScreenInfo from '../components/EditScreenInfo';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
});
