import { Redirect, useRouter } from 'expo-router';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { Text } from 'react-native';

export default function Index() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  const { user } = useUser();

  console.log(user);

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }
  if (isSignedIn) {
    return <Redirect href={'/mainPage'} />;
  } else {
    return <Redirect href={'/(auth)/sign-in'} />;
  }
}
