/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '~components/Colors';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.badgebg,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '75%',
  },
  text: {
    color: colors.white,
  },
});

export default Message;
