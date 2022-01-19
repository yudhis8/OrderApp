import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonComponent, HeaderComponent} from '../../component';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListProduct from './section/listProduct.sc';

const HomeScreen = props => {
  return (
    <>
      <HeaderComponent title={'Product List'} />
      <ListProduct />
      <ButtonComponent
        style={styles.buttonFly}
        onPress={() => props.navigation.navigate('CreateNote')}>
        <FontAwesome name="shopping-bag" size={20} color="black" />
      </ButtonComponent>
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

export default HomeScreen;
