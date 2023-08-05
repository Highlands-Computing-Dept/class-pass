import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import generateUUID from "./utilities/generateUUID";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleTaskInput = (value) => {
    setTask(value);
  };

  const handleSubmitNewTask = () => {
    const nextTasks = [
      ...tasks,
      { id: generateUUID(), description: task, isComplete: false },
    ];

    setTasks(nextTasks);
    setTask("");
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
    const nextTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(nextTasks);
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
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 24, paddingVertical: 50 }}>ClassPass</Text>
        <TaskInput
          task={task}
          handleTaskInput={handleTaskInput}
          handleSubmitNewTask={handleSubmitNewTask}
        />
      </View>
      <View>
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
  inputContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
