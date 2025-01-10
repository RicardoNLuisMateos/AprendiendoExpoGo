import { View } from 'react-native';
import { type ImageSource } from 'expo-image';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    // Animated
    const scaleImage = useSharedValue(imageSize);
    // Detect double tap
    const doubleTab = Gesture.Tap()
    .numberOfTaps(2)
    .onStart( () => {
        // Scale
        if(scaleImage.value !== imageSize * 2) {
            // Resize to double
            scaleImage.value = scaleImage.value * 2;
        } else {
            // Resize to original
            scaleImage.value = Math.round(scaleImage.value / 2);
        }
    });
    // Takes the size values ​​that are modified by double clicking
    const imageStyle = useAnimatedStyle(() => {
        return {
          width: withSpring(scaleImage.value),
          height: withSpring(scaleImage.value),
        };
    });
  return (
    <View style={{ top: -350 }}>
        <GestureDetector gesture={doubleTab}>
            <Animated.Image
                source={stickerSource}
                resizeMode="contain"
                style={[imageStyle, { width: imageSize, height: imageSize }]}
            />
        </GestureDetector>
    </View>
  );
}
