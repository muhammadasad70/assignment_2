import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/api';

export default function EditTaskScreen({ route, navigation }) {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.due_date);
  const [completed, setCompleted] = useState(task.completed);

  const handleUpdate = async () => {
    try {
      await api.put(`/tasks/${task.ID}`, {
        title,
        description,
        priority,
        due_date: dueDate,
        completed
      });
      Alert.alert('✅ Task updated!');
      navigation.goBack();
    } catch (err) {
      console.error('Error updating task:', err);
      Alert.alert('❌ Failed to update task');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.ID}`);
      Alert.alert('🗑️ Task deleted');
      navigation.goBack();
    } catch (err) {
      console.error('Error deleting task:', err);
      Alert.alert('❌ Failed to delete task');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} value={priority} onChangeText={setPriority} />
      <TextInput style={styles.input} value={dueDate} onChangeText={setDueDate} />
      <TextInput style={styles.input} value={completed.toString()} onChangeText={val => setCompleted(val === 'true')} />
      <Button title="Update Task" onPress={handleUpdate} />
      <Button title="Delete Task" color="red" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 }
});