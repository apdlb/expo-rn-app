import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export const RootPage = () => {
  return (
    <View>
      <Text>Sign up page</Text>

      <Link href={'/sign-in'}>
        <Text>Sign in</Text>
      </Link>
    </View>
  );
};
