import React from 'react';
import {Text, View} from 'react-native';
import TabNavigation from './Tab.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailOrder from '../screens/detailOrder';

const Stack = createNativeStackNavigator();
const HomeNavigation = ({params}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="DetailOrder" component={DetailOrder} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
