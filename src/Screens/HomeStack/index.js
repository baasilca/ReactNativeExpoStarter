import React from 'react';
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Signup'
import Login from '../Login'
import PeachPage from '../coffee';
import CoffeeHome  from '../CoffeeHome'

const Stack = createNativeStackNavigator();

function App(props) {

  LogBox.ignoreAllLogs();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="PeachPage"
        component={PeachPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="CoffeeHome"
        component={CoffeeHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator >
  );
}

export default App;
