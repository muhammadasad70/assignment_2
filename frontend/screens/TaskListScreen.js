// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import api from '../api/api';
// import TaskCard from '../components/TaskCard';

// export default function TaskListScreen({ navigation }) {
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async () => {
//     try {
//       const res = await api.get('/tasks');
//       setTasks(res.data);
//     } catch (err) {
//       console.error('Failed to fetch tasks:', err);
//     }
//   };
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', async () => {
//       try {
//         const res = await api.get('/tasks');
//         console.log("🧾 Task response data:", res.data); // <-- add this
//         setTasks(res.data);
//       } catch (err) {
//         console.error('Failed to fetch tasks:', err);
//       }
//     });
//     return unsubscribe;
//   }, [navigation]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📋 Your Tasks</Text>
//       <Button title="Add New Task" onPress={() => navigation.navigate('CreateTask')} />
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.ID.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate('EditTask', { task: item })}>
//             <TaskCard task={item} />
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 }
// });
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import api from '../api/api';
import TaskCard from '../components/TaskCard';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      console.log('🧾 Task response data:', res.data); // Debug log
      setTasks(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch tasks:', err);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchTasks);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Your Tasks</Text>

      <Button
        title="➕ Add New Task"
        onPress={() => navigation.navigate('CreateTask')}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.ID?.toString()} // 🔧 Correct field casing
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('EditTask', { task: item })}
          >
            <TaskCard task={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
});
