import { View, StyleSheet, Text, Image } from "react-native";
import colours from "../constants/colours";

export default function () {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.innerWrapper}>
        <Image
          style={headerStyles.heroImage}
          source={require("../assets/png/hero-image.png")}
        />
      </View>
      <View style={headerStyles.innerWrapper}>
        <View>
          <Text style={headerStyles.classTitle}>Class</Text>
        </View>
        <View>
          <Text style={headerStyles.passTitle}>Pass</Text>
        </View>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 30,
  },
  classTitle: {
    fontWeight: 600,
    color: colours.red,
    textTransform: "uppercase",
    fontSize: 24,
  },
  passTitle: {
    fontWeight: 600,
    color: colours.green,
    textTransform: "uppercase",
    fontSize: 30,
  },
  heroImage: {
    width: 110,
    height: 100,
  },
  innerWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
