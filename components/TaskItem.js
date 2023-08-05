import { StyleSheet, Text, View } from "react-native";

export default function ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  labelText: {
    fontSize: 24,
    textAlign: "left",
  },
});
