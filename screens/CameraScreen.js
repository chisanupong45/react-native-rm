import React, { useState, useEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";

const CameraScreen = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [images, setImages] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result.assets[0].uri);
    if (!result.canceled) {
      setImages(result.assets[0].uri);
    } else {
      navigation.goBack();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setImages(null);
        const galleryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status === "granted");
        pickImage();
      })();
    }, [])
  );

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage.</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {images && (
        <Image
          source={{ uri: images }}
          style={{ flex: 1, width: "100%" }}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default CameraScreen;
