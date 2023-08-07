import { StyleSheet, Text, View } from "react-native";
import TaskItem from "./TaskItem";
import colours from '../constants/colours';

export default function ({
  handleEditTask,
  handleDeleteTask,
  toggleComplete,
  tasks,
}) {
  return tasks.length ? (
    <View style={styles.tasksContainer}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          toggleComplete={toggleComplete}
          task={task}
        />
      ))}
    </View>
  ) : (
    <View style={styles.getStartedContainer}>
      <Text style={styles.getStartedText}>No tasks yet!</Text>
      <Text style={styles.getStartedText}>Please add one above...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {},
  getStartedContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: colours.darkText,
    marginVertical: 10,
  },
});