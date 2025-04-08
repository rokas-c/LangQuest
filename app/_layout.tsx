import { Stack } from 'expo-router';
import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

export default function Layout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="gameScreen" options={{ headerShown: false }} />
        <Stack.Screen name="optionsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="eulaScreen" options={{ headerShown: false }} />
        <Stack.Screen name="profileScreen" options={{ headerShown: false }} />

        {/* Home */}
        <Stack.Screen name="home" options={{ headerShown: false }} />
        {/* Auth screens */}
        <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
