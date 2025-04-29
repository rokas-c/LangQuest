import React, { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useSSO, useUser } from '@clerk/clerk-expo';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  useWarmUpBrowser();

  const { user } = useUser();

  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri({ path: '/mainPage', scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={['#6366F1', '#8B5CF6']}
            style={styles.logoBackground}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Text style={styles.logoText}>LQ</Text>
          </LinearGradient>
          <Text style={styles.appTitle}>LangQuest</Text>
        </View>

        <Text style={styles.welcomeText}>Welcome to LangQuest</Text>
        <Text style={styles.subtitleText}>Sign in to track your language learning progress</Text>

        {/* Decorative Elements */}
        <View style={styles.decorationContainer}>
          <View style={styles.decorationCircle} />
          <View style={[styles.decorationCircle, styles.decorationCircleSmall]} />
        </View>

        {/* Google Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={onPress}>
          <View style={styles.googleIconContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
              style={styles.googleIcon}
            />
          </View>
          <Text style={styles.signInText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Alternative Sign In Options */}
        <View style={styles.alternativeContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.emailButton} onPress={() => router.push('/mainPage')}>
          <LinearGradient
            colors={['#4F46E5', '#6366F1']}
            style={styles.emailButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Ionicons name="mail-outline" size={20} color="#FFFFFF" />
            <Text style={styles.emailButtonText}>Continue with Email</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Terms and Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to our <Text style={styles.termsLink}>Terms of Service</Text>{' '}
            and <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBackground: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 48,
    textAlign: 'center',
    maxWidth: '80%',
    lineHeight: 22,
  },
  decorationContainer: {
    position: 'absolute',
    top: -80,
    right: -60,
    zIndex: -1,
  },
  decorationCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
  },
  decorationCircleSmall: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -50,
    left: -30,
    backgroundColor: 'rgba(99, 102, 241, 0.12)',
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  googleIconContainer: {
    marginRight: 12,
  },
  googleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  signInText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  alternativeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  orText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  emailButton: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  emailButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  emailButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  termsContainer: {
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 24,
  },
  termsText: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  termsLink: {
    color: '#4F46E5',
    fontWeight: '500',
  },
});
