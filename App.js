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
    const nextTasks = [...tasks, { id: generateUUID(), description: task }];

    setTasks(nextTasks);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 24, paddingTop: 25, paddingBottom: 25 }}>
          ClassPass
        </Text>
        <TextInput
          style={{
            fontSize: 24,
            padding: 10,
            justifyContent: "flex-start",
            backgroundColor: "pink",
            width: "100%",
          }}
          placeholder="Type here to add a task!"
          onChangeText={(value) => handleTaskInput(value)}
          defaultValue={task}
          onSubmitEditing={handleSubmitNewTask}
        />
      </View>
      <View>
        <TaskList tasks={tasks} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9a9a9a",
    paddingTop: 50,
  },
  inputContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
