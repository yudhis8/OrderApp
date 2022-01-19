import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonComponent, HeaderComponent} from '../../component';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ArchivedScreen = props => {
  return (
    <>
      <HeaderComponent title={'Archived Note'} />
      <ButtonComponent
        style={styles.buttonFly}
        onPress={() => props.navigation.navigate('CreateNote')}>
        <MaterialIcons name="create" size={24} color="#fff" />
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

export default ArchivedScreen;
