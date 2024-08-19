import { TextInput } from '@/components';
import { cn } from '@/utils';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export const RootPage = () => {
  return (
    <View className={cn('w-full')}>
      <Text>Sign up page</Text>

      <TextInput label="Label" />

      <Link href="/sign-in">
        <Text>Sign in</Text>
      </Link>
    </View>
  );
};
