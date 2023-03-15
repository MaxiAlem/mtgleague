import { View, Text,Button,TouchableOpacity } from 'react-native'
import React,{useContext,useEffect,useState} from 'react';
import CheckBox from 'expo-checkbox';
import {TContext} from '../Components/TestContext'
import AsyncStorage from '@react-native-async-storage/async-storage';


import readData from '../helpers/readData.js';


const STORAGE_KEY = 'PLAYERS_KEY';


const SetTournament = ({navigation}) => {
    const {decksList} = useContext(TContext)
    const [players, setPlayers] = useState([]);//estado para guardar

    useEffect(()=>{
      
      readData().then((data) => {
        setPlayers(data);
        })
    },[])

    const actualizarActivoPersona = async (id, nuevoActivo) => {
      try {
        const players = await readData()
        const index = players.findIndex(pl => pl.id === id)
        if(index !== -1) {
          players[index].activo = nuevoActivo
          await AsyncStorage.setItem('players', JSON.stringify(players))
          console.log('Persona actualizada')
        }
      } catch(e) {
        console.log(e)
      }
    }
    
    const toggleAvailable = async (id) =>{

      const updatedPlayers = players.map((pl) =>
        pl.id === id ? { ...pl, available: !pl.available } : pl
      );
      setPlayers(updatedPlayers);
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlayers));
      } catch (e) {
        alert('Failed to save the data to the storage');
      }
    }
  return (
    <View>
      <Text>SetTournament</Text>
     
        <Text>Select players availables</Text>
     
            
        <View>
        {players.length ===0? (
        <Text>No hay personas guardadas.</Text>
      ) : (
        players.map((pl, id) => (
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
{/*       
      <Text>Select Decks availables</Text>
      <Text>{JSON.stringify(decksList)}</Text> */}
    
      <Button
        title="start tournament"
        onPress={() => navigation.navigate('Tournament')}
      />
        
        <Button
        title="start league"
        onPress={() => navigation.navigate('League')}
      />
    </View>
  )
}

export default SetTournament