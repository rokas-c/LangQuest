import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const OptionsScreen = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="person-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Profile Information</Text>
              <Text style={styles.settingSubtitle}>Update your personal details</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="lock-closed-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Security</Text>
              <Text style={styles.settingSubtitle}>Manage password and security settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#F59E0B', '#D97706']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="notifications-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Notifications</Text>
              <Text style={styles.settingSubtitle}>Get important updates and alerts</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
              thumbColor={notifications ? '#4F46E5' : '#F9FAFB'}
              ios_backgroundColor="#E5E7EB"
              onValueChange={() => setNotifications(!notifications)}
              value={notifications}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#059669', '#10B981']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="moon-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Dark Mode</Text>
              <Text style={styles.settingSubtitle}>Easier on your eyes in dim light</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
              thumbColor={darkMode ? '#4F46E5' : '#F9FAFB'}
              ios_backgroundColor="#E5E7EB"
              onValueChange={() => setDarkMode(!darkMode)}
              value={darkMode}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#DB2777', '#EC4899']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="volume-high-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Sound Effects</Text>
              <Text style={styles.settingSubtitle}>Hear feedback when you complete tasks</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
              thumbColor={soundEffects ? '#4F46E5' : '#F9FAFB'}
              ios_backgroundColor="#E5E7EB"
              onValueChange={() => setSoundEffects(!soundEffects)}
              value={soundEffects}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#6D28D9', '#8B5CF6']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="time-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Daily Reminders</Text>
              <Text style={styles.settingSubtitle}>Get a reminder to practice daily</Text>
            </View>
            <Switch
              trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
              thumbColor={dailyReminders ? '#4F46E5' : '#F9FAFB'}
              ios_backgroundColor="#E5E7EB"
              onValueChange={() => setDailyReminders(!dailyReminders)}
              value={dailyReminders}
            />
          </View>
        </View>

        {/* Learning Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learning</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <MaterialCommunityIcons name="book-open-variant" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Learning Language</Text>
              <Text style={styles.settingSubtitle}>Currently learning Lithuanian</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <MaterialCommunityIcons name="target" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Daily Goals</Text>
              <Text style={styles.settingSubtitle}>Set your daily practice goals</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#6B7280', '#9CA3AF']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="shield-checkmark-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Privacy Policy</Text>
              <Text style={styles.settingSubtitle}>How we protect your data</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <LinearGradient
                colors={['#6B7280', '#9CA3AF']}
                style={styles.settingIcon}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Ionicons name="document-text-outline" size={18} color="#FFF" />
              </LinearGradient>
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Terms of Service</Text>
              <Text style={styles.settingSubtitle}>LangQuest terms and conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LinearGradient
            colors={['#EF4444', '#DC2626']}
            style={styles.logoutGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Text style={styles.logoutText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>LangQuest v1.0.4</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingIconContainer: {
    marginRight: 14,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
  logoutButton: {
    marginTop: 24,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  logoutGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 24,
  },
});

export default OptionsScreen;
