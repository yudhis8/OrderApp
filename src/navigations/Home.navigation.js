import React from 'react';
import {Text, View} from 'react-native';
import TabNavigation from './Tab.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';

const Stack = createNativeStackNavigator();
const HomeNavigation = ({params}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
