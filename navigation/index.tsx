/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, Ionicons } from '@expo/vector-icons';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {
  ColorSchemeName,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import Colors from '~components/Colors';
import ChatRoomScreen from '~screens/ChatRoomScreen';
import HomeScreen from '~screens/HomeScreen';
import NotFoundScreen from '~screens/NotFoundScreen';
import { RootStackParamList } from '~types/types';

// eslint-disable-next-line import/order
import LinkingConfiguration from './LinkingConfiguration';
// eslint-disable-next-line import/order
import styles from './styles';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}> */}
      {/*   <Stack.Screen name="Modal" component={ModalScreen} /> */}
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.image}
      />
      <Text style={styles.text}>Signal</Text>
      <View style={styles.icons}>
        <Ionicons name="camera" size={24} color={Colors.blackTint} />
        <Feather name="edit-2" size={24} color={Colors.blackTint} />
      </View>
    </View>
  );
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width - 70 }]}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={[styles.image, { right: 35 }]}
      />
      <Text style={styles.text}>Signal</Text>
      <View style={styles.icons}>
        {/*<Ionicons name="videocam" size={24} color={Colors.blackTint} /> */}
        <Ionicons name="camera" size={24} color={Colors.blackTint} />
        <Feather name="edit-2" size={24} color={Colors.blackTint} />
      </View>
    </View>
  );
};
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
