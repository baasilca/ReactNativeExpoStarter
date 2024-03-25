import React from "react";
import Store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "././src/Screens/HomeStack";
import { PaperProvider,DefaultTheme  } from "react-native-paper";

export default Main = () => {
  const Stack = createNativeStackNavigator();

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
      secondary:"#fff"
    },
  };

  return (
    <Store>
      <PaperProvider  theme={customTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeStack"
              component={HomeStack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Store>
  );
};

