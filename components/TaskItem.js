import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ({ handleDeleteTask, toggleComplete, task }) {
  const { id, description, isComplete } = task;

  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleEdit}>
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
