import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = 'PLAYERS_KEY';
const readData = async () => {
    try {
        const playersSaved = await AsyncStorage.getItem(STORAGE_KEY);
        const data = playersSaved !== null ? JSON.parse(playersSaved) : [];
    //   if (playersSaved !== null) {
    //     setPlayers(JSON.parse(playersSaved));//habia que reconvertir el string del storage a objeto }
    
        
    return data;
      
    } catch (e) {
      alert('Failed to fetch players from storage');
    }
  };   




  export default readData