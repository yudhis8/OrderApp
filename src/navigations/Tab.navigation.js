import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Entypo from 'react-native-vector-icons/Entypo';
import OrderScreen from '../screens/order';
import SettingsScreen from '../screens/settings';
const tabBarOptions = {
  labelStyle: {
    fontSize: 16,
    paddingTop: 5,
  },
  style: {
    borderTopWidth: 0,
    elevation: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 15,
  },
  tabStyle: {
    paddingBottom: 6,
    paddingTop: 9,
    marginTop: -6,
    backgroundColor: 'white',
  },
};
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{...tabBarOptions, headerShown: false}}
      initialRouteName="HomeDashboard">
      <Tab.Screen
        name="HomeDashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Entypo name="list" size={24} color={focused ? 'blue' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="heart-outlined"
              size={24}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="archive"
              size={24}
              color={focused ? 'blue' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
