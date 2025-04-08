import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState('Alex Johnson');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Header with Gradient Overlay */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1743518636~exp=1743522236~hmac=c44e02931babf60ccac26e040d88a3f7986a672119e1a193f4bba085e1199e78&w=996',
          }}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={['transparent', 'rgba(79, 70, 229, 0.8)']}
          style={styles.gradientOverlay}
        />

        {/* Header Actions */}
        <SafeAreaView style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </TouchableOpacity>

          <View style={styles.headerRightButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="camera-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="settings-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      {/* Profile Content */}
      <View style={styles.profileContent}>
        {/* Profile Picture and Info */}
        <View style={styles.profileInfoSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/unique-avatars-icon-eps-file-download_1127397-4.jpg?w=740',
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <LinearGradient colors={['#4F46E5', '#6366F1']} style={styles.editAvatarGradient}>
                <Ionicons name="camera" size={14} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.usernameContainer}>
              {isEditing ? (
                <TextInput
                  value={username}
                  style={styles.usernameInput}
                  autoFocus={true}
                  onBlur={() => setIsEditing(false)}
                />
              ) : (
                <Text style={styles.username}>{username}</Text>
              )}
              <TouchableOpacity style={styles.editUsernameButton} onPress={handleEditClick}>
                <Ionicons name="pencil" size={16} color="#4F46E5" />
              </TouchableOpacity>
            </View>

            <View style={styles.levelContainer}>
              <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                style={styles.levelBadge}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={styles.levelText}>Level 5</Text>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#EEF2FF' }]}>
              <Ionicons name="flag" size={20} color="#4F46E5" />
            </View>
            <Text style={styles.statLabel}>Country</Text>
            <Text style={styles.statValue}>🇱🇹</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#FEF3C7' }]}>
              <MaterialCommunityIcons name="star-four-points" size={20} color="#D97706" />
            </View>
            <Text style={styles.statLabel}>XP Points</Text>
            <Text style={styles.statValue}>1,250</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#FFEDD5' }]}>
              <MaterialCommunityIcons name="fire" size={20} color="#EA580C" />
            </View>
            <Text style={styles.statLabel}>Day Streak</Text>
            <Text style={styles.statValue}>7 days</Text>
          </View>
        </View>

        {/* Achievement Section */}
        <View style={styles.achievementSection}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>

          <View style={styles.achievementCard}>
            <LinearGradient colors={['#4F46E5', '#6366F1']} style={styles.achievementIcon}>
              <MaterialCommunityIcons name="trophy" size={24} color="#FFF" />
            </LinearGradient>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Weekly Champion</Text>
              <Text style={styles.achievementDesc}>Completed 15 lessons in one week</Text>
            </View>
            <Text style={styles.achievementDate}>2d ago</Text>
          </View>

          <View style={styles.achievementCard}>
            <LinearGradient colors={['#D97706', '#F59E0B']} style={styles.achievementIcon}>
              <MaterialCommunityIcons name="lightning-bolt" size={24} color="#FFF" />
            </LinearGradient>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Perfect Score</Text>
              <Text style={styles.achievementDesc}>Answered all questions correctly</Text>
            </View>
            <Text style={styles.achievementDate}>5d ago</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.mainActionButton}>
            <LinearGradient
              colors={['#4F46E5', '#6366F1']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <MaterialCommunityIcons name="account-multiple-plus" size={18} color="#FFF" />
              <Text style={styles.mainActionText}>Add Friends</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryActionButton}>
            <Text style={styles.secondaryActionText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    height: 220,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
  headerRightButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileContent: {
    flex: 1,
    marginTop: -60,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
  },
  profileInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 12,
    overflow: 'hidden',
  },
  editAvatarGradient: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  username: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  usernameInput: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    borderBottomWidth: 1,
    borderColor: '#4F46E5',
    paddingBottom: 2,
    marginRight: 8,
  },
  editUsernameButton: {
    marginLeft: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelContainer: {
    alignSelf: 'flex-start',
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  achievementSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  achievementIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  achievementDesc: {
    fontSize: 13,
    color: '#6B7280',
  },
  achievementDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  actionButtons: {
    marginBottom: 24,
  },
  mainActionButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    gap: 8,
  },
  mainActionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryActionButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  secondaryActionText: {
    color: '#4B5563',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileScreen;
