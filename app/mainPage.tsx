import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MainPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={['#6366F1', '#8B5CF6']}
              style={styles.logoBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Text style={styles.logoText}>LQ</Text>
            </LinearGradient>
            <Text style={styles.title}>LangQuest</Text>
          </View>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push('/profileScreen')}>
            <LinearGradient
              colors={['#EEF2FF', '#E0E7FF']}
              style={styles.profileGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <AntDesign name="user" size={18} color="#4F46E5" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Welcome Card */}
        <LinearGradient
          colors={['#4F46E5', '#6366F1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.welcomeCard}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>Continue Learning</Text>
            <Text style={styles.welcomeSubtitle}>You're on a 3-day streak!</Text>

            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>72% to next level</Text>
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => router.push('/gameScreen')}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Ionicons name="arrow-forward" size={16} color="#4F46E5" />
            </TouchableOpacity>
          </View>

          <View style={styles.decorationContainer}>
            <View style={styles.decorationCircle} />
            <View style={[styles.decorationCircle, styles.decorationCircleSmall]} />
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#EEF2FF' }]}>
              <MaterialCommunityIcons name="book-open-variant" size={22} color="#4F46E5" />
            </View>
            <Text style={styles.actionTitle}>Practice</Text>
            <Text style={styles.actionSubtitle}>Daily exercises</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#FEF3C7' }]}>
              <MaterialCommunityIcons name="trophy-outline" size={22} color="#D97706" />
            </View>
            <Text style={styles.actionTitle}>Challenge</Text>
            <Text style={styles.actionSubtitle}>Test your skills</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#ECFDF5' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={22} color="#059669" />
            </View>
            <Text style={styles.actionTitle}>Vocabulary</Text>
            <Text style={styles.actionSubtitle}>Word library</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#FDF2F8' }]}>
              <MaterialCommunityIcons name="account-group-outline" size={22} color="#DB2777" />
            </View>
            <Text style={styles.actionTitle}>Community</Text>
            <Text style={styles.actionSubtitle}>Learn together</Text>
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <TouchableOpacity style={styles.legalButton} onPress={() => router.push('/eulaScreen')}>
          <AntDesign name="infocirlceo" size={14} color="#6B7280" />
          <Text style={styles.legalText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={[styles.navButton, styles.activeNavButton]}>
          <Ionicons name="home" size={22} color="#4F46E5" />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Ionicons name="compass-outline" size={22} color="#6B7280" />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCenterButton} onPress={() => router.push('/gameScreen')}>
          <LinearGradient colors={['#4F46E5', '#6366F1']} style={styles.navCenterButtonGradient}>
            <Ionicons name="play" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/')}>
          <Ionicons name="stats-chart-outline" size={22} color="#6B7280" />
          <Text style={styles.navText}>Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/optionsScreen')}>
          <Ionicons name="settings-outline" size={22} color="#6B7280" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFF',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  profileButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  profileGradient: {
    padding: 10,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  welcomeCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  welcomeContent: {
    zIndex: 2,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '72%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 8,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4F46E5',
  },
  decorationContainer: {
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: 1,
  },
  decorationCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorationCircleSmall: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: -30,
    left: -40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  legalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  legalText: {
    fontSize: 13,
    color: '#6B7280',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    flex: 1,
  },
  activeNavButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    marginTop: 2,
    fontSize: 11,
    color: '#6B7280',
  },
  activeNavText: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '600',
    color: '#4F46E5',
  },
  navCenterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
  },
  navCenterButtonGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});

export default MainPage;
