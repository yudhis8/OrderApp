import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {auth} from 'helpers/Firebase';
import {Text, View} from 'react-native';
import AuthNavigation from './Auth.navigation';
import HomeNavigation from './Home.navigation';

const AppNavigation = ({params}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
