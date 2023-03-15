import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import readData from '../helpers/readData.js';

const PositionsTable = () => {
  const [players, setPlayers] = useState([])
  useEffect(()=>{
      
    readData().then((data) => {
      setPlayers(data);
      console.log(players)})
  },[])
  return (
    <View>
      <Text>PositionsTable</Text>
      <View>
        {players.length ===0? (
        <Text>No hay personas guardadas.</Text>
      ) : (
        players.map((pl, id) => (
          <>
          <Text key={id}>{pl.name}  /   {pl.points}</Text>
          
          </>
          
          
        ))
      )}
      
    </View>
    </View>
  )
}

export default PositionsTable