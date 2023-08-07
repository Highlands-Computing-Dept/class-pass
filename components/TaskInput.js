import { StyleSheet, TextInput } from 'react-native';

export default function ({ handleTaskInput, task, handleSubmitNewTask }) {
  return (
    <TextInput
      style={textInputStyles.input}
      placeholder="Type here to add a task!"
      onChangeText={(value) => handleTaskInput(value)}
      defaultValue={task}
      onSubmitEditing={handleSubmitNewTask}
    />
  );
}

const textInputStyles = StyleSheet.create({
  input: {
    fontSize: 24,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
});
