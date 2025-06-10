import { Image } from "expo-image"
import { useState } from "react"
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from "react-native"


type Props = {
    onSelect : (image : ImageSourcePropType) => void
    onCloseModal : ()=>void
}


export default function EmojiList({onSelect, onCloseModal}: Props){
const [emoji] = useState<ImageSourcePropType[]>(
            [
                require("../../assets/images/emoji1.png"),
                require("../../assets/images/emoji2.png"),
                require("../../assets/images/emoji3.png"),
                require("../../assets/images/emoji4.png"),
                require("../../assets/images/emoji5.png"),
                require("../../assets/images/emoji6.png")
            ]
            )

    return(<>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data = {emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({item,index})=> (
                <Pressable  onPress={()=>{
                        onSelect(item)
                        onCloseModal()
                    }}>
                    <Image source = {item} key={index} style={styles.image}/>
          
                    </Pressable>
                )}

           
            />
        
    
    </>)
}
const styles = StyleSheet.create({
  listContainer: {
      height : 100,
      position : "absolute",
      bottom : 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: 'space-between',
    paddingBottom : 20,
 
  },
  image: {
    width: 100,
    height: 90,
    marginRight: 20,
  },
});