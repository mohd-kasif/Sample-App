import 'react-native-gesture-handler';
import React from 'react';
// import type {No from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './screen/Login';
import Splash from './screen/Splash';
import Verification from './screen/Verification';
import Dashboard from './screen/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
Icon.loadFont();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#A05AD8',
  },
});

export default App;
