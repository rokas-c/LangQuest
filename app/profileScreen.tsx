import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState('https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?t=st=1743518636~exp=1743522236~hmac=c44e02931babf60ccac26e040d88a3f7986a672119e1a193f4bba085e1199e78&w=996');
  const [avatarImage, setAvatarImage] = useState('https://img.freepik.com/premium-vector/unique-avatars-icon-eps-file-download_1127397-4.jpg?w=740');
  const [username, setUsername] = useState('Username');
  const [isEditing, setIsEditing] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text); // Update the username state when the input changes
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Background */}
      <LinearGradient colors={['#FFD700', '#FFA500']} style={styles.topSection}>
        <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBackgroundImage('https://via.placeholder.com/500')} style={styles.editButton}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.profileHeader}>
          <Image source={{ uri: avatarImage }} style={styles.avatar} />
          <View style={styles.usernameContainer}>
            {isEditing ? (
              <TextInput
                value={username}
                onChangeText={handleUsernameChange}
                style={styles.usernameInput}
                autoFocus={true}
              />
            ) : (
              <Text style={styles.username}>{username}</Text>
            )}
            <TouchableOpacity onPress={handleEditClick} style={styles.editUsernameButton}>
              <AntDesign name="edit" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.level}>Level 5</Text>
        </View>
      </LinearGradient>

      {/* Bottom Section with Stats */}
      <View style={styles.bottomSection}>
        <View style={styles.statsContainer}>
          <View style={styles.statItemLeft}>
            <Text style={styles.statNumber}>🇱🇹</Text>
            <Text style={styles.statLabel}>Country</Text>
          </View>
          <View style={styles.statItemCenter}>
            <Text style={styles.statNumber}>1,250</Text>
            <Text style={styles.statLabel}>XP</Text>
          </View>
          <View style={styles.statItemRight}>
            <Text style={styles.statNumber}>7 <Text style={styles.fireEmoji}>🔥</Text></Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>

        {/* Add Friends Button */}
        <TouchableOpacity style={styles.addFriendButton}>
          <Text style={styles.buttonText}>Add Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    width: '100%',
    position: 'relative', // Ensure the background is positioned correctly
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensure it fills the background correctly
  },
  backButton: {
    position: 'absolute',
    top: 30, // Adjusted to move up
    left: 20,
  },
  editButton: {
    position: 'absolute',
    top: 30, // Adjusted to move up
    right: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
    resizeMode: 'cover',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  usernameInput: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    width: 200,
    textAlign: 'center',
  },
  editUsernameButton: {
    marginLeft: 10,
  },
  level: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  bottomSection: {
    flex: 1.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute the stats evenly
    width: '100%',
    marginBottom: 20,
  },
  statItemLeft: {
    alignItems: 'center',
    width: '30%', // Adjust width for alignment
    paddingLeft: 20,
  },
  statItemCenter: {
    alignItems: 'center',
    width: '40%', // Center the XP stat
  },
  statItemRight: {
    alignItems: 'center',
    width: '30%', // Adjust width for alignment
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  fireEmoji: {
    fontSize: 20, // Resize the emoji to match the text
  },
  addFriendButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
