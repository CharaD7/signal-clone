import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const ChatRoomItem = ({ chatRoom }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          Hola Hola coca cola asdf asdf in buha asdf asdf in buha
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
