import { View, StyleSheet } from "react-native";
import ImagenViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImagenViewer imgSource={PlaceholderImage} />        
      </View>
      <View style={style.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
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
  footerContainer: {
    flex: 1/3,
    alignItems: "center",
  },
});
