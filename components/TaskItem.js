import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ({ children }) {
  const handleDelete = () => {
    console.log("delete");
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleComplete = () => {
    console.log("complete");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{children}</Text>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleEdit}>
          <Image
            source={require("../assets/png/pen-regular.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComplete}>
          <Image
            source={require("../assets/png/check-regular.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
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
  labelText: {
    fontSize: 24,
    textAlign: "left",
  },
});
