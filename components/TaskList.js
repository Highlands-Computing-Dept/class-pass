import { StyleSheet, Text, View } from "react-native";
import TaskItem from "./TaskItem";

export default function ({ tasks }) {
  console.log({ tasks });

  return tasks ? (
    <View style={styles.tasksContainer}>
      {tasks.map((task) => (
        <TaskItem key={task.id}>{task.description}</TaskItem>
      ))}
    </View>
  ) : (
    <View style={styles.getStartedContainer}>
      <Text style={styles.getStartedText}>No tasks yet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {},
  getStartedContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  getStartedText: {
    fontSize: 24,
  },
});
