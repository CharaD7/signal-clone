/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaView>
    );
  }
}
