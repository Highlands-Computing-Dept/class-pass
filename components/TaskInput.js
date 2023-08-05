import { TextInput } from "react-native";

export default function ({ handleTaskInput, task, handleSubmitNewTask }) {
  return (
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
  );
}
