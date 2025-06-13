import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Welcome to QuickTask</Text>
      <Text style={styles.description}>
        This is a full-stack To-Do app built using React Native and Go (Gin).
        You can create, view, update, and delete your tasks.
      </Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Tasks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 }
});