import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 24, paddingVertical: 50 }}>ClassPass</Text>
        <TextInput
          style={{
            fontSize: 24,
            padding: 30,
            justifyContent: "flex-start",
            backgroundColor: "#D3D3D3",
            width: "100%",
          }}
          placeholder="Type here to add a task!"
          onChangeText={(value) => handleTaskInput(value)}
          defaultValue={task}
          onSubmitEditing={handleSubmitNewTask}
        />
      </View>
      <View>
        <TaskList tasks={tasks} toggleComplete={toggleComplete} />
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
