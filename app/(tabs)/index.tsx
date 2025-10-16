import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [hours, setHours] = useState('');
  const [emoji, setEmoji] = useState('🤔');

  const handleChange = (text: string) => {
    const value = text.replace(/[^0-9]/g, '');
    setHours(value);

    const num = parseInt(value, 10);
    if (isNaN(num)) {
      setEmoji('🤔');
    } else if (num <= 4) {
      setEmoji('🤕');
    } else if (num <= 6) {
      setEmoji('😴');
    } else {
      setEmoji('💪');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#C41414', dark: '#A61616' }}
      headerImage={
        <Image
          source={require('@/assets/images/medflow_logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to MedFlow! 🏥</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">You are on a 3 day streak! 🔥</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">How much did you sleep last night?</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Insert number of hours"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={hours}
          onChangeText={handleChange}
        />
      </ThemedView>

      <ThemedView>
        <ThemedText type="subtitle">Your current state: </ThemedText>
        <ThemedText type="title">{emoji}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: -60,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
