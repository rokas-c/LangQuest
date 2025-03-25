import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const eulaScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>End User License Agreement (EULA)</Text>
      <ScrollView style={styles.eulaText}>
        {/* Ensure the content is inside the Text component */}
        <Text style={styles.eulaContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
          {'\n\n'}
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')} // Navigate back to the Home screen
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  eulaText: {
    width: '100%',
    marginBottom: 20,
  },
  eulaContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default eulaScreen;
