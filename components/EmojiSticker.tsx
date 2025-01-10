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
    // Tranlate sticker
    const traslateX = useSharedValue(0);
    const traslateY = useSharedValue(0);
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
    // Drag - Detect change of position
    const drag = Gesture.Pan().onChange((event) => {
        traslateX.value = event.translationX;
        traslateY.value = event.translationY;
    });
    // Update style when dragging
    const containerStyle = useAnimatedStyle(() => {
       return {
           transform: [{ translateX: traslateX.value }, { translateY: traslateY.value }]
       }
    });

  return (
    <GestureDetector gesture={drag}>
        <Animated.View style={[containerStyle, { top: -350 }]}>
            <GestureDetector gesture={doubleTab}>
                <Animated.Image
                    source={stickerSource}
                    resizeMode="contain"
                    style={[imageStyle, { width: imageSize, height: imageSize }]}
                />
            </GestureDetector>
        </Animated.View>
    </GestureDetector>
  );
}
