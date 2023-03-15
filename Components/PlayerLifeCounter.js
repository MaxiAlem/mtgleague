import { StyleSheet, Button , Text, View,TouchableOpacity } from 'react-native'
import Icon from "@expo/vector-icons/FontAwesome";
import React, {useState} from 'react'

export default function CPrueba  ({name}) {

    const [count, setCount] = useState(20)
 
    return (
      <View style={styles.container}>
        <Text style={styles.name }> {name}</Text>
        <Text style={styles.text}>{count}</Text>
    
        <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count+1)}
          >
          <Icon
            name="plus"
            color='white'
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count-1)}
          >
          <Icon
            name="minus"
            color='white'
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(20)}
          >
          <Icon
            name="refresh"
            color='white'
            size={30}
          />
        </TouchableOpacity>
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
  name:{
    textAlign:'center',
    fontSize:20,
    color:'white'
  },
  text:{
    fontSize:100,
    color:'white',
    textAlign:'center'
  },
  btn:{
    borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#333',
       borderRadius:50,
       opacity:0.7,
       marginHorizontal:'2%'
       
  },
  container:{
    borderWidth:4,

  },
  btnContainer:{
   
    flexDirection:'row',
    bottom:0.,
    justifyContent: 'center',
  
  }
})
