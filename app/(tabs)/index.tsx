import { View, StyleSheet } from "react-native";
import ImagenViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImagenViewer imgSource={PlaceholderImage} />        
      </View>
      <View style={style.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
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
