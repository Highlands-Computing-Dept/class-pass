import { StyleSheet, Text, View } from "react-native";
import TaskItem from "./TaskItem";

export default function ({ handleDeleteTask, toggleComplete, tasks }) {
  return tasks ? (
    <View style={styles.tasksContainer}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          handleDeleteTask={handleDeleteTask}
          toggleComplete={toggleComplete}
          task={task}
        />
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
