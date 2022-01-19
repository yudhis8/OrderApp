import {BoxComponent, RowComponent, TextComponent} from 'component';
import React from 'react';

const TitleAreaSection = ({params}) => (
  <BoxComponent
    borderRadius={10}
    backgroundColor={'#fff'}
    mtop={15}
    shadow
    width={'100%'}
    padding={10}>
    <RowComponent justify="space-between">
      <TextComponent>#ID00123</TextComponent>
      <TextComponent>24 Feb, 2022</TextComponent>
    </RowComponent>
    <RowComponent justify="space-between">
      <TextComponent>10.000</TextComponent>
      <TextComponent>04:00 AM</TextComponent>
    </RowComponent>
  </BoxComponent>
);

export default TitleAreaSection;
