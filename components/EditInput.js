import { TextInput } from "react-native";
import { useState } from "react";

export default function ({ task, handleEditTask, setIsEditing }) {
  const [editedDescription, setEditedDescription] = useState(task.description);

  return (
    <TextInput
      style={{
        fontSize: 24,
        justifyContent: "flex-start",
        backgroundColor: "#D3D3D3",
      }}
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
