import { cn } from '@/utils';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function HomeLayout() {
  return (
    <View className={cn('flex-1 w-full bg-white items-center justify-center')}>
      <StatusBar style="auto" />

      <Slot />
    </View>
  );
}
