import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.title}>Erasyl Nuraddinov</Text>

      <Text style={styles.count}>Likes: {likes}</Text>
      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 32 },
  count: { fontSize: 20, marginTop: 24 },
  button: {
    minHeight: 44,
    paddingHorizontal: 24,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});