import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function HomeLayout() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <StatusBar style="auto" />

      <Slot />
    </View>
  );
}
