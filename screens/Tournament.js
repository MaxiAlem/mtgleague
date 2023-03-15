import { View, Text,Button } from 'react-native'
import React, { useContext,useEffect, useState } from 'react';
import {TContext} from '../Components/TestContext'
// import SelectMultiple from 'react-native-select-multiple' //////
import CheckBox from 'expo-checkbox';
import readData from '../helpers/readData';


const Tournament = () => {
    const {decksList} = useContext(TContext)
   
    const [players,setPlayers] = useState([])
     const availablePl = players.filter(pl=> pl.available=== true)
    useEffect(()=>{
      
      readData().then((data) => {
        setPlayers(data);
        console.log(players, 'desde torneo')})
    },[])

  return (
    
    <View>
        <Text> players </Text>

        <View>
        {availablePl.length ===0? (
        <Text>No hay personas guardadas.</Text>
      ) : (
        availablePl.map((pl, id) => (
          <>
          <Text key={id}>{pl.name}</Text>
          
          <CheckBox
          
          value={pl.available}
          onValueChange={(value)=> toggleAvailable(pl.id,value)}
          color={pl.available ? '#4630EB' : undefined}
        />
          </>
          
          
        ))
      )}
      </View>

      <Button 
        title='start Round' 
         onPress={() => console.log('comenzar ronda')}></Button>
      <Text>Select Decks availables</Text>
      <Text>{JSON.stringify(decksList)}</Text>
    </View>
  )
}

export default Tournament