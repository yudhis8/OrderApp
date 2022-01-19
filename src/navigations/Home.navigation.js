import React from 'react';
import {Text, View} from 'react-native';
import TabNavigation from './Tab.navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailOrder from '../screens/detailOrder';
import DetailChat from '../screens/detailChat';
import CartScreen from '../screens/cart';

const Stack = createNativeStackNavigator();
const HomeNavigation = ({params}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="DetailOrder" component={DetailOrder} />
      <Stack.Screen name="DetailChat" component={DetailChat} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
