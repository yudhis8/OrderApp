import {BoxComponent, RowComponent, TextComponent} from 'component';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductListSection = ({params}) => (
  <BoxComponent
    borderRadius={10}
    backgroundColor={'#fff'}
    mtop={15}
    shadow
    width={'100%'}
    padding={10}>
    <TextComponent>Product List</TextComponent>
    <BoxComponent pleft={20} mtop={5}>
      <RowComponent justify="space-between" mtop={10}>
        <BoxComponent width={'10%'}>
          <Entypo name="clipboard" size={24} color="black" />
        </BoxComponent>
        <BoxComponent width={'50%'}>
          <TextComponent>Nuttela - Rasa Kacang Segar</TextComponent>
        </BoxComponent>
        <BoxComponent width={'40%'}>
          <TextComponent>Rp. 10.000 (1x)</TextComponent>
        </BoxComponent>
      </RowComponent>
      <RowComponent justify="space-between" mtop={10}>
        <BoxComponent width={'10%'}>
          <Entypo name="clipboard" size={24} color="black" />
        </BoxComponent>
        <BoxComponent width={'50%'}>
          <TextComponent>Nuttela - Rasa Kacang Segar</TextComponent>
        </BoxComponent>
        <BoxComponent width={'40%'}>
          <TextComponent>Rp. 10.000 (1x)</TextComponent>
        </BoxComponent>
      </RowComponent>
    </BoxComponent>
  </BoxComponent>
);

export default ProductListSection;
