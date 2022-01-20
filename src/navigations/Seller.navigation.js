import React from 'react';
import {Text, View} from 'react-native';
import TabNavigation from './TabSeller.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailOrderSeller from '../screens/detailOrderSeller';
import DetailChat from '../screens/detailChat';

const Stack = createNativeStackNavigator();
const HomeNavigation = ({params}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="DetailOrderSeller" component={DetailOrderSeller} />
      <Stack.Screen name="DetailChat" component={DetailChat} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
