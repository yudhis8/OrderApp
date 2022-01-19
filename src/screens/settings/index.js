import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BoxComponent,
  ButtonComponent,
  HeaderComponent,
  RowComponent,
  TextComponent,
} from '../../component';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {logoutAction} from 'redux/actions/auth';

const ArchivedScreen = props => {
  const dispatch = useDispatch();
  return (
    <>
      <HeaderComponent title={'Settings'} />
      <BoxComponent alignItems="center">
        <BoxComponent
          borderRadius={10}
          backgroundColor={'#fff'}
          shadow
          width={'80%'}
          padding={10}
          mtop={10}>
          <ButtonComponent onPress={() => dispatch(logoutAction())}>
            <RowComponent
              width={'100%'}
              justify="space-between"
              alignItems="center">
              <TextComponent>Logout</TextComponent>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </RowComponent>
          </ButtonComponent>
        </BoxComponent>
      </BoxComponent>
    </>
  );
};

const styles = StyleSheet.create({
  buttonFly: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#54BFF8',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ArchivedScreen;
