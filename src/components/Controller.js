import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Controller = ({playOrPause,back,forward,play}) => {
  return (
    <View style={styles.root}>
          <Icon name='play-back' size={30} onPress={ ()=>back()}/>
          {play? <Icon name='pause' size={30} onPress={ ()=>playOrPause()} />: <Icon name='play' size={30} onPress={ ()=>playOrPause()}/>}
         
         
          <Icon name='play-forward' size={30} onPress={ ()=>forward()}/>
         
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "20%",
        
        
    }
})

export default Controller