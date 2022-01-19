import React, {useState, useCallback, memo} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  BoxComponent,
  RowComponent,
  TextComponent,
  ButtonComponent,
} from '../../../component';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import moment from 'moment';
const ListItem = props => {
  const {item, navigation, menuAction} = props;

  const onNavigate = useCallback(() => {
    navigation.navigate('DetailOrder', item);
  }, [item, navigation]);
  return (
    <BoxComponent
      borderRadius={10}
      backgroundColor={'#fff'}
      mtop={15}
      shadow
      width={'100%'}
      padding={10}>
      <ButtonComponent
        onPress={onNavigate}
        justifyContent="center"
        alignItems="center">
        <RowComponent justify="space-between" width={'100%'}>
          <TextComponent>Miranjo Shop</TextComponent>
          <TextComponent>Pending</TextComponent>
        </RowComponent>
        <RowComponent
          justify="space-between"
          alignItems="center"
          width={'100%'}
          mtop={10}>
          <BoxComponent width={'10%'}>
            <Entypo name="clipboard" size={24} color="black" />
          </BoxComponent>
          <BoxComponent width={'60%'}>
            <TextComponent>Payment</TextComponent>
            <TextComponent size={10}>#ID00123</TextComponent>
            <TextComponent>24/02/22 09:00 AM</TextComponent>
          </BoxComponent>
          <BoxComponent>
            <TextComponent size={20}>10.000</TextComponent>
          </BoxComponent>
        </RowComponent>
        <RowComponent justify="space-between" width={'100%'} mtop={10}>
          <TextComponent>2 Product</TextComponent>
          <TextComponent>Subtotal: 10000</TextComponent>
        </RowComponent>
      </ButtonComponent>
    </BoxComponent>
  );
};

ListItem.propsType = {
  item: PropTypes.object,
  navigation: PropTypes.object,
  menuAction: PropTypes.func,
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default memo(ListItem);
