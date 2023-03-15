import { View, Text,Button } from 'react-native'
import React from 'react'
import TestContext from '../Components/TestContext'

const Home = ({navigation}) => {
  return (
    <TestContext>
       <View>

      <Text>hola soy un hoome</Text>
      <Button
        title="Lifecounter"
        onPress={() => navigation.navigate('Lifecounter')}
      />
      <Button
        title="set players and shits"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="start tournament"
        onPress={() => navigation.navigate('SetTournament')}
      />
      <Button
        title="positions general and shits"
        onPress={() => navigation.navigate('Positions')}
      />
     
    </View>
    </TestContext>
   
  )
}

export default Home