import { View, Text,Button } from 'react-native'
import React, { useContext,useEffect, useState } from 'react';
import {TContext} from '../Components/TestContext'
// import SelectMultiple from 'react-native-select-multiple' //////
import CheckBox from 'expo-checkbox';
import readData from '../helpers/readData';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const League = () => {
    const {decksList} = useContext(TContext)
   
    const [players,setPlayers] = useState([])
    const [showPl,setShowPl] = useState(false)
    const [showDk,setShowDk] = useState(false)
    const [round, setRound] = useState(0)
     const availablePl = players.filter(pl=> pl.available=== true)

      const startRound =()=>{
        
        console.log('comenzar ronda' ,{round})
       
      }
      const nextRound=()=>{
        setRound(round +1)
      }
      const finishEvent=()=>{
        setRound(0)
      }
     ////mezclar players checkbox de win
    //separar en grupos de dos(dato temporal)
    //ganador dailypoints +1
    //siguiente ronda sort de nuevo pero asegurar mix
    //contar rondas(dato temporal)
    //tabla para consultar puntos (popup?)
    //ganador +2 general, segundo +1 general (maximo de 5 puntos por torneo?)


    useEffect(()=>{
      
      readData().then((data) => {
        setPlayers(data)
      })
    },[])


     // const grupos = availablePl.length/2
      const createCouples=(availablePl)=>{
        availablePl.sort(()=>Math.random()- 0.5)
      
      const couples = [];
      for(let i = 0; i < availablePl.length;i +=2){
        if(i+1 <availablePl.length){
          couples.push([availablePl[i],availablePl[i+1]]);
        }else {
          couples.push([availablePl[i]])
        }
      }
      return couples
    }
    const couples = createCouples(availablePl)
    const couplesCards = couples.map((c,i)=>{
      
      
      const data123 = [
      {
        label: c[0].name
       },
       {
        label: c[1].name
       }
      ];
      return (
        <View key={i}>
          <Text>Esta es la pareja número {i + 1}</Text>
          {/* <Text>El jugador 1 es: {c[0].name}</Text>
          <Text>El jugador 2 es: {c[1].name}</Text> */}
          <View >
            <RadioButtonRN 
              style={{flexDirection:'row'}}
              boxStyle={{flex: 1,}}
              data={data123}
              selectedBtn={(e) => console.log(e)}
             box={true}
             icon={
              <Icon
                name="trophy"
                size={25}
                color="#2c9dd1"
              />
            }
            /> 
          </View >
           
        </View>
      );
      
      
    })
   
  
      
  return (
    
    <View>
       <Button
          title="Show Player list"
          onPress={() => setShowPl(!showPl)}
        />
          <Button
          title="Show Decks list"
          onPress={() => setShowDk(!showDk)}
        />
      {showPl?
      <View>
        {availablePl.length ===0? (
        <Text>No hay personas guardadas.</Text>
      ) : (
        availablePl.map((pl, id) => (
          <>
          <Text key={id}>{pl.name}</Text>
          </>    
        ))
      )}
      </View>
      : null
      }
          
     {showDk?
     <View>
      <Text>Select Decks availables</Text>
      <Text>{JSON.stringify(decksList)}</Text>
     </View>
  
      : null
      }
        
      <Button 
        title='start Round' 
         onPress={() => startRound( )}></Button>
         
      {round === 0 && couples=== 0?
        null
      :<>
        <Text>Ronda numero {round}</Text>
        {couplesCards}
        </> 
      } 

    <Button 
        title='Next Round' 
         onPress={() => nextRound( )}></Button>
     <Button 
        title='finish event' 
         onPress={() => finishEvent( )}></Button>
    </View>
  ) 
}

export default League