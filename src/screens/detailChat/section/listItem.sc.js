import React, {useState, useCallback, memo} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  BoxComponent,
  RowComponent,
  TextComponent,
  ButtonComponent,
} from '../../../component';
import PropTypes from 'prop-types';
import moment from 'moment';
const ListItem = props => {
  const {item, navigation, state} = props;

  const onNavigate = useCallback(() => {
    navigation.navigate('DetailProduct', item);
  }, [item, navigation]);

  const otherChat = () => {
    return (
      <RowComponent alignItems="center" width={'100%'}>
        <BoxComponent
          height={30}
          width={30}
          borderRadius={25}
          backgroundColor="blue"
          justifyContent="center"
          alignItems="center">
          <TextComponent size={10} color="#fff">
            {item?.name?.charAt(0).toUpperCase()}
          </TextComponent>
        </BoxComponent>
        <BoxComponent
          width={'80%'}
          borderRadius={10}
          backgroundColor={'#fff'}
          mtop={15}
          mleft={10}
          shadow
          padding={10}
          justifyContent="center">
          <TextComponent>{item.message}</TextComponent>
        </BoxComponent>
      </RowComponent>
    );
  };
  const ourChat = () => {
    return (
      <RowComponent alignItems="center" justify="flex-end" width={'100%'}>
        <BoxComponent
          width={'80%'}
          borderRadius={10}
          backgroundColor={'blue'}
          mtop={15}
          mleft={10}
          shadow
          padding={10}
          justifyContent="center">
          <TextComponent color="#fff">{item.message}</TextComponent>
        </BoxComponent>
      </RowComponent>
    );
  };
  return (
    <BoxComponent mtop={5} width={'100%'} padding={10}>
      {state?.auth?.user?.user?.uid === item?.uid ? ourChat() : otherChat()}
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
