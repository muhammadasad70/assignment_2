import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../api/api'; // ✅ use centralized axios instance

export default function CreateTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async () => {
    console.log("📤 Submit button pressed");
    console.log({ title, description, priority, dueDate });

    if (!title || !description || !priority || !dueDate) {
      Alert.alert('❗ Error', 'All fields are required.');
      return;
    }

    try {
      const res = await api.post('/tasks', {
        title,
        description,
        priority,
        due_date: dueDate,
        completed: false
      });

      console.log("✅ Task created:", res.data);
      Alert.alert('✅ Success', 'Task created successfully!');
      navigation.navigate('Tasks');
    } catch (error) {
      console.error('❌ Create error:', error.message);
      Alert.alert('❌ Failed to create task');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a New Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Priority (Low, Medium, High)"
        value={priority}
        onChangeText={setPriority}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <View style={styles.buttonContainer}>
        <Button title="Create Task" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 20
  }
});
