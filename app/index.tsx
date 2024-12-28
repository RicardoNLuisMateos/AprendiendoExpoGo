import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Home Screen</Text>
      <Link href="/about" style={style.button}>About</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
