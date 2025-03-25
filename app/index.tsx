import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={['#FFD700', '#FFA500']} style={styles.gradientContainer}>
      {/* Dot Background */}
      <View style={styles.dotContainer}>
        {[...Array(30)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random(), // Random opacity for dynamic look
              },
            ]}
          />
        ))}
      </View>

      {/* Title with icon */}
      <View style={styles.titleContainer}>
        <Text style={styles.icon}>📚</Text>
        <Text style={styles.title}>LangQuest</Text>
      </View>

      {/* Play, Options, and EULA Buttons */}
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => router.push('/gameScreen')} // Navigate to game screen
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionsButton}
        onPress={() => router.push('/optionsScreen')} // Navigate to options screen
      >
        <Text style={styles.buttonText}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.eulaButton}
        onPress={() => router.push('/eulaScreen')} // Navigate to EULA screen
      >
        <Text style={styles.buttonText}>EULA</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 30,
    borderRadius: 0,
  },
  dotContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  dot: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    zIndex: 1,
  },
  icon: {
    fontSize: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2A3663',
    textShadowColor: '#4F64A2', // Neon blue glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15, // Larger shadow radius for glowing effect
  },
  playButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#4F64A2', // Neon blue glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25, // Increased radius for a larger glow
    elevation: 20, // Higher elevation for more pronounced shadow
  },
  optionsButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#4F64A2', // Neon blue glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25, // Increased radius for a larger glow
    elevation: 20, // Higher elevation for more pronounced shadow
  },
  eulaButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#4F64A2', // Neon blue glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 25, // Increased radius for a larger glow
    elevation: 20, // Higher elevation for more pronounced shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#4F64A2', // Neon blue glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10, // Larger radius for glowing effect
  },
});

export default Home;
