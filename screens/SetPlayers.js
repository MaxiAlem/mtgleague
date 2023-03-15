import { View, Text,TextInput,Button,TouchableOpacity } from 'react-native'
import React,{useState,useEffect  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import readData from '../helpers/readData.js';


const STORAGE_KEY = 'PLAYERS_KEY';

const SetPlayers = () => {
  const [players, setPlayers] = useState([]);//estado para guardar
  const [newPl,setNewPl] =useState('')

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('players', JSON.stringify(players))
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }
  // const readData = async () => {
  //   try {
  //     const playersSaved = await AsyncStorage.getItem(STORAGE_KEY);
  
  //     if (playersSaved !== null) {
  //       setPlayers(JSON.parse(playersSaved));//habia que reconvertir el string del storage a objeto 
  //     }
  //   } catch (e) {
  //     alert('Failed to fetch players from storage');
  //   }
  // };

  useEffect(() => {
          
    readData().then((data) => {
      setPlayers(data);
      });
  }, []); //recuperamos la data siempre que iniciemo la app
   useEffect(()=>{
    saveData()
    
   },[players]) //cuanod se modifica el estado players (con setplayers), 


   const addPlayer = async() => {
    if (newPl !== '') {
      const newPlObj = {
        id: players.length + 1,
        name: newPl,
        available:true,
        currentDeck:'',
        dailyPoints:Number(),
        points:0,
        win:0,
        lose:0
      };
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...players, newPlObj]));
        setPlayers([...players, newPlObj]);
        setNewPl('');
      } catch (e) {
        console.log(e);
        alert('Failed to save the data to the storage');
      }
    }
  };

  const removePl = async (name) => {
    try {
      const filteredPlayers = players.filter(pl =>pl.name !== name); //buscamos tods los no eliminables
      setPlayers(filteredPlayers);//save on state
      await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(filteredPlayers))//save on storage
    } catch (error) {
      console.log(error);
    }
  };

  const cleanData = async ()=>{
    SetPlayers([]) //vaciamos el state
    await AsyncStorage.removeItem(STORAGE_KEY )
  }

  return (
    <View>
      <Text>Add new Player</Text>
      <TextInput
          placeholder="Ingresa el nombre de la persona"
          value={newPl}
          onChangeText={(texto) => setNewPl(texto)}
        />
        <Button title="Agregar" onPress={addPlayer} />
        
        <View>
        {players.length ===0? (
        <Text>No hay personas guardadas.</Text>,
        console.log(players)
      ) : (
        players.map((pl, id) => (
          <>
          <Text key={id}>{pl.name}</Text>
          
          <TouchableOpacity onPress={() => removePl(pl.name)}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
          </>
          
          
        ))
      )}
      {/* {players.map((pl) => (
        <Text key={pl.id}>{pl.nombre}</Text>
      ))} */}
    </View>
    <Button title="Eliminar personas" onPress={() => cleanData()} />
    </View>
  )
}

export default SetPlayers