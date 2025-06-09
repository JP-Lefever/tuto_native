
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";


export default function Index() {
  
  const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ['images'],
      allowsEditing : true,
      quality : 1
    })

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select an image')
    }
  } 
  
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)


  const PlaceHolderImage = require("@/assets/images/background-image.png")
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} selectedImage = {selectedImage} />
      </View>
      <View style={styles.footerContainer}>
      <Button onPress={pickImageAsync} theme="primary" label="Choose a photo"/>
      <Button label="Use this photo"/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
    
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});