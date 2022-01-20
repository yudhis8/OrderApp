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
    navigation.navigate('DetailOrderSeller', item);
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
          <TextComponent>{item?.store}</TextComponent>
          <TextComponent>{item?.status}</TextComponent>
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
            <TextComponent size={10}>#{item?.id}</TextComponent>
            <TextComponent>
              {moment
                .unix(item?.created_at?.seconds)
                .format('DD/MM/YY HH:MM A')}
            </TextComponent>
          </BoxComponent>
          <BoxComponent>
            <TextComponent size={20}>Rp.{item?.total}</TextComponent>
          </BoxComponent>
        </RowComponent>
        <RowComponent justify="space-between" width={'100%'} mtop={10}>
          <TextComponent>{item?.products?.length} Product</TextComponent>
          <TextComponent>Subtotal: Rp.{item?.subtotal}</TextComponent>
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
