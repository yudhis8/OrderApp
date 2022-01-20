import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {auth, getCurrentUserDatabase} from 'helpers/Firebase';
import {Text, View} from 'react-native';
import AuthNavigation from './Auth.navigation';
import HomeNavigation from './Home.navigation';
import SellerNavigation from './Seller.navigation';

const AppNavigation = ({params}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  console.log(
    '🚀 ~ file: App.navigation.js ~ line 13 ~ AppNavigation ~ userType',
    userType,
  );

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      const query = await getCurrentUserDatabase({user});
      if (query.docs.length !== 0) {
        query.docs.forEach(item => {
          let id = item.id;
          let data = item.data();

          setUserType(data?.level);
        });
      }
    }

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        userType === 'buyer' ? (
          <HomeNavigation />
        ) : (
          <SellerNavigation />
        )
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
