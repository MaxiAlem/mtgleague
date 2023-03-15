import { View, Text,Button } from 'react-native'
import React, { useContext,useEffect, useState } from 'react';
import {TContext} from '../Components/TestContext'
// import SelectMultiple from 'react-native-select-multiple' //////
import CheckBox from 'expo-checkbox';
import readData from '../helpers/readData';


const League = () => {
    const {decksList} = useContext(TContext)
   
    const [players,setPlayers] = useState([])
     const availablePl = players.filter(pl=> pl.available=== true)


     ////mezclar players checkbox de win
    //separar en grupos de dos(dato temporal)
    //ganador dailypoints +1
    //siguiente ronda sort de nuevo pero asegurar mix
    //contar rondas(dato temporal)
    //tabla para consultar puntos (popup?)
    //ganador +2 general, segundo +1 general (maximo de 5 puntos por torneo?)


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
          
          {/* <CheckBox
          
          value={pl.available}
          onValueChange={(value)=> toggleAvailable(pl.id,value)}
          color={pl.available ? '#4630EB' : undefined}
        /> */}
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

export default League