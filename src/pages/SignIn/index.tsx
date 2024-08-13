import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export const SignInPage = () => {
  return (
    <View>
      <Text>Sign in page</Text>

      <Link href={''}>
        <Text>Sign up</Text>
      </Link>
    </View>
  );
};
