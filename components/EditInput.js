import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function ({ task, handleEditTask, setIsEditing }) {
  const [editedDescription, setEditedDescription] = useState(task.description);

  return (
    <TextInput
      style={styles.inputField}
      placeholder="Update your task description here"
      onChangeText={(value) => setEditedDescription(value)}
      defaultValue={editedDescription}
      onSubmitEditing={() => {
        handleEditTask(task.id, editedDescription);
        setIsEditing(false);
      }}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    fontSize: 24,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    padding: 10,
    flex: 1,
    textAlign: 'right',
  }
})