import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Gradient Section */}
      <LinearGradient
        colors={['#FFD700', '#FFA500']} // Yellow to orange gradient (like profile)
        style={styles.gradientTop}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.icon}>📚</Text>
          <Text style={styles.title}>LangQuest</Text>
        </View>
      </LinearGradient>

      {/* Bottom White Section */}
      <View style={styles.whiteBottom}>
        {/* Play Button */}
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => router.push('/gameScreen')} // Navigate to game screen
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>

        {/* EULA Button */}
        <TouchableOpacity
          style={styles.eulaButton}
          onPress={() => router.push('/eulaScreen')} // Navigate to EULA screen
        >
          <Text style={styles.buttonText}>EULA</Text>
        </TouchableOpacity>
      </View>

      {/* Top Icons */}
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={() => router.push('/optionsScreen')} style={styles.iconButton}>
          <AntDesign name="setting" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profileScreen')} style={styles.iconButton}>
          <AntDesign name="user" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientTop: {
    flex: 0.5, // Take up half of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 40, // Rounded edges at the bottom
    borderBottomRightRadius: 40, // Rounded edges at the bottom
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 70, // Larger size for the icon
    marginRight: 10,
  },
  title: {
    fontSize: 36, // Larger text for the title
    fontWeight: 'bold',
    color: '#2A3663', // Dark text for contrast
    textShadowColor: '#4F64A2', // Neon glow for contrast
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15, // Glowing effect
  },
  whiteBottom: {
    flex: 0.5, // Take up the bottom half of the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40, // Rounded edges at the top
    borderTopRightRadius: 40, // Rounded edges at the top
    paddingBottom: 30,
  },
  playButton: {
    backgroundColor: '#FFD700', // Yellow gradient color (top half)
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    elevation: 10,
  },
  eulaButton: {
    backgroundColor: '#fff', // White background (bottom half)
    borderColor: '#FFD700', // Yellow border for the second half
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    elevation: 10,
  },
  buttonText: {
    color: '#2A3663', // Dark text
    fontSize: 18,
    fontWeight: 'bold',
  },
  topIcons: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  iconButton: {
    padding: 10,
  },
});

export default Home;
