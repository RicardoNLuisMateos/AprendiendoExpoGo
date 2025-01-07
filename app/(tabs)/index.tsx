import { View, StyleSheet } from "react-native";
import ImagenViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";	

const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  // Create state for the selected image
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  // Function to handle image selection
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.canceled) {
      console.log(result);
      // Inside uri there is the path to the selected image or base64
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImagenViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>        
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
