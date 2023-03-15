import {StyleSheet, View, Text,Button } from 'react-native'
import React, { useContext } from 'react'
import Player from "../Components/PlayerLifeCounter.js";
import {TContext} from '../Components/TestContext'

const Lifecounter = ({navigation}) => {
  const {pl1, pl2} = useContext(TContext)
  return (
    <View>
      {/* <Button
        title="Go to other Lifecounter"
        onPress={() => navigation.push('Lifecounter')}
      /> */}
      <Button 
       title="Pal lobby" 
       onPress={() => navigation.navigate('Home')} 
      />
      <View style={styles.reversalplayerbox}>
        <Player name={pl2} />
      </View>
        
      <View style={styles.playerbox}>
        <Player name={pl2} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    playerbox:{
      flexDirection: "column",
      width:'100%',
      backgroundColor:'blue'
    },
    reversalplayerbox:{
      transform: [{rotate: '180deg'}],
      width:'100%',
      backgroundColor:'green'
    }
  
  });
  

export default Lifecounter