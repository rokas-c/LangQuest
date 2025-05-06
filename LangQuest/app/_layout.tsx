import { Stack } from 'expo-router';
import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

const clerkApiKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkApiKey) {
  throw new Error('Clerk API Raktas nerastas');
}

//console.log(clerkApiKey);

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkApiKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="gameScreen" options={{ headerShown: false }} />
        <Stack.Screen name="optionsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="eulaScreen" options={{ headerShown: false }} />
        <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
        <Stack.Screen name="mainPage" options={{ headerShown: false }} />

        {/* Home(Index) */}
        <Stack.Screen name="home" options={{ headerShown: false }} />
        {/* Auth screen */}
        <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
