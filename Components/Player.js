import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {TContext} from './TestContext'

const [myArray,setMyarray] = useState()

const Player = () => {
  return (
    <View>
      <Text>Player</Text>
    </View>
  )
}

export default Player