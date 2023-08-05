import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EditInput from "./EditInput";

export default function ({
  handleDeleteTask,
  handleEditTask,
  toggleComplete,
  task,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { id, description, isComplete } = task;

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={toggleIsEditing}>
          <Image
            source={require("../assets/png/pen-regular.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleComplete(id)}>
          <Image
            source={require("../assets/png/check-regular.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(id)}>
          <Image
            source={require("../assets/png/trash-can-regular.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>

      {isEditing ? (
        <EditInput
          task={task}
          handleEditTask={handleEditTask}
          setIsEditing={setIsEditing}
        />
      ) : (
        <Text
          style={{
            fontSize: 24,
            textAlign: "left",
            textDecorationLine: isComplete ? "line-through" : "none",
            textDecorationStyle: "solid",
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  container: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
