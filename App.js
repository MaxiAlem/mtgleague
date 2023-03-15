import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View, Text, Settings  } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import TestContext from "./Components/TestContext";
import Home from "./screens/Home";
import Lifecounter from "./screens/Lifecounter";
import Tournament from "./screens/Tournament";
import PositionsTable from "./screens/PositionsTable";
import SetPlayers from "./screens/SetPlayers";
import SetTournament from "./screens/SetTournament";
import League from "./screens/League";


const Stack = createStackNavigator();

export default function App() {
  return (
    <TestContext>
         <NavigationContainer>

   
    <SafeAreaView style={styles.container}>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lifecounter" component={Lifecounter} />
        <Stack.Screen name="Settings" component={SetPlayers} />
        <Stack.Screen name="SetTournament" component={SetTournament} />
        <Stack.Screen name="Positions" component={PositionsTable} />
        <Stack.Screen name="Tournament" component={Tournament}/>
        <Stack.Screen name="League" component={League}/>
      </Stack.Navigator>
    </SafeAreaView>
     </NavigationContainer>
    </TestContext>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent:'center',
    width:'100%'
    
    
  },
  text:{
    borderWidth: 1,
    fontSize:40
  },
 

});
