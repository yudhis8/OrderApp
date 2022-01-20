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
  const {item, navigation, onActionPress} = props;

  const onNavigate = useCallback(() => {
    navigation.navigate('DetailProduct', item);
  }, [item, navigation]);
  return (
    <BoxComponent
      borderRadius={10}
      backgroundColor={'#fff'}
      mtop={15}
      shadow
      width={'48%'}
      padding={10}>
      <ButtonComponent
        disabled={true}
        onPress={onNavigate}
        justifyContent="center"
        alignItems="center">
        <BoxComponent width={'100%'} height={100}>
          <Image
            style={styles.image}
            source={{
              uri: item?.img,
            }}
          />
        </BoxComponent>
        <TextComponent size={16} mtop={10} fontWeight="600">
          {item?.name}
        </TextComponent>
        <TextComponent size={12} mtop={10}>
          Rp. {item?.price * item?.qty}
        </TextComponent>
        <RowComponent
          alignItems="center"
          mtop={20}
          justify="space-between"
          width={'60%'}>
          <ButtonComponent
            onPress={() => onActionPress('plus')}
            justifyContent="center"
            alignSelf="center"
            alignItems="center"
            backgroundColor="blue"
            borderRadius={25}
            width={30}>
            <TextComponent color="#fff">+ </TextComponent>
          </ButtonComponent>
          <TextComponent>{item?.qty}</TextComponent>
          <ButtonComponent
            onPress={() => onActionPress('minus')}
            justifyContent="center"
            alignSelf="center"
            alignItems="center"
            backgroundColor="blue"
            borderRadius={25}
            width={30}>
            <TextComponent color="#fff">-</TextComponent>
          </ButtonComponent>
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
