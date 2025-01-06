import { View, StyleSheet } from "react-native";
import ImagenViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImagenViewer imgSource={PlaceholderImage} />
      </View>
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
  imageContainer: {
    flex: 1,
  },
});
