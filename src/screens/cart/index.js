import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BoxComponent,
  ButtonComponent,
  HeaderComponent,
  TextComponent,
} from '../../component';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListProduct from './section/listProduct.sc';

const CartScreen = props => {
  return (
    <>
      <HeaderComponent title={'Cart List'} />
      <ListProduct />
      <ButtonComponent
        style={styles.buttonFly}
        onPress={() => props.navigation.navigate('Order')}>
        <TextComponent color="#fff">Pesan Sekarang</TextComponent>
      </ButtonComponent>
    </>
  );
};

const styles = StyleSheet.create({
  buttonFly: {
    position: 'absolute',
    bottom: 20,

    backgroundColor: '#54BFF8',
    width: '50%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  redPostion: {
    top: -10,
    right: -5,
    zIndex: 99,
  },
});

export default CartScreen;
