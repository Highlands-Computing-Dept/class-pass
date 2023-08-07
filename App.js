import { useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colours from './constants/colours';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import generateUUID from './utilities/generateUUID';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleTaskInput = (value) => {
    setTask(value);
  };

  const handleSubmitNewTask = () => {
    const nextTasks = [
      ...tasks,
      { id: generateUUID(), description: task, isComplete: false },
    ];

    setTasks(nextTasks);
    setTask('');
  };

  const toggleComplete = (taskId) => {
    const nextTasks = [...tasks];
    const oldTask = nextTasks.find((task) => task.id === taskId);
    const oldTaskIndex = nextTasks.indexOf(oldTask);
    const nextTask = { ...oldTask, isComplete: !oldTask.isComplete };
    nextTasks[oldTaskIndex] = nextTask;

    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    const taskToDelete = tasks.find(({id}) => taskId === id);

    Alert.alert(
      'Delete task?',
      `Are you sure you want to delete the task: ${taskToDelete.description}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete', 
          onPress: () => {
            const nextTasks = tasks.filter((task) => task.id !== taskId);

            setTasks(nextTasks);
          },
          style: 'destructive'
        },
      ]
    )
  };

  const handleEditTask = (taskId, editedDescription) => {
    const nextTasks = [...tasks];
    const oldTask = nextTasks.find((task) => task.id === taskId);
    const oldTaskIndex = nextTasks.indexOf(oldTask);
    const nextTask = { ...oldTask, description: editedDescription };
    nextTasks[oldTaskIndex] = nextTask;

    setTasks(nextTasks);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TaskInput
        task={task}
        handleTaskInput={handleTaskInput}
        handleSubmitNewTask={handleSubmitNewTask}
      />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colours.background,
    padding: 32,
  },
});
