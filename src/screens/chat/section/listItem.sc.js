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
    navigation.navigate('DetailChat', item);
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
          <BoxComponent
            height={50}
            width={50}
            borderRadius={25}
            backgroundColor="blue"
            justifyContent="center"
            alignItems="center">
            <TextComponent color="#fff">
              {item?.name?.charAt(0).toUpperCase()}
            </TextComponent>
          </BoxComponent>
          <BoxComponent width={'60%'} justifyContent="center">
            <TextComponent>{item?.name}</TextComponent>
            <TextComponent>{item?.preview}</TextComponent>
          </BoxComponent>
          <BoxComponent width={'20%'} justifyContent="center">
            <TextComponent>
              {moment.unix(item?.date?.seconds).format('HH:mm A')}
            </TextComponent>
          </BoxComponent>
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
