import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gameScreen" options={{ headerShown: false }} />
      <Stack.Screen name="optionsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="eulaScreen" options={{ headerShown: false }} />
      <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
