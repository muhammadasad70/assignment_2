import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title || 'Untitled Task'}</Text>
      <Text>{task.description || 'No description'}</Text>
      <Text>Priority: {task.priority || 'N/A'}</Text>
      <Text>Due: {task.due_date || 'N/A'}</Text>
      <Text>Status: {task.completed ? '✅ Completed' : '❌ Not done'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4
  }
});
