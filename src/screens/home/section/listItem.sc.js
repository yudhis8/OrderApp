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
        onPress={onNavigate}
        justifyContent="center"
        alignItems="center">
        <BoxComponent width={'100%'} height={100}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://sc04.alicdn.com/kf/Ucdc0abc91279479997b7424b586424f2l.jpeg',
            }}
          />
        </BoxComponent>
        <TextComponent size={16} mtop={10} fontWeight="600">
          Nuttela - Rasa Kacang Segar
        </TextComponent>
        <TextComponent size={12} mtop={10}>
          Rp. 10.000
        </TextComponent>
        <ButtonComponent
          justifyContent="center"
          alignSelf="center"
          alignItems="center"
          backgroundColor="blue"
          borderRadius={25}
          ptop={10}
          pbot={10}
          mtop={20}
          width={80}>
          <TextComponent>+ Add</TextComponent>
        </ButtonComponent>
        <RowComponent
          alignItems="center"
          mtop={20}
          justify="space-between"
          width={'60%'}>
          <ButtonComponent
            justifyContent="center"
            alignSelf="center"
            alignItems="center"
            backgroundColor="blue"
            borderRadius={25}
            width={30}>
            <TextComponent>+ </TextComponent>
          </ButtonComponent>
          <TextComponent>1</TextComponent>
          <ButtonComponent
            justifyContent="center"
            alignSelf="center"
            alignItems="center"
            backgroundColor="blue"
            borderRadius={25}
            width={30}>
            <TextComponent>-</TextComponent>
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
