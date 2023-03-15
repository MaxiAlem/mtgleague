import { View, Text } from 'react-native'
import React, { createContext, useState }  from 'react'

const TContext = createContext()

const pl1 = 'namepl1'
const pl2 = 'namepl2'

const decksList = [
  'deck1','deck2','deck3','deck4','deck5','deck6','deck7','deck8'
]

//7
const context = {
    pl1,pl2,decksList
}
const TestContext = ({children}) => {
  return (
    <TContext.Provider value={context}>
      {children}
    </TContext.Provider>
  ) 
}

export default TestContext
export {TContext}