import {BoxComponent, RowComponent, TextComponent} from 'component';
import moment from 'moment';
import React from 'react';

const TitleAreaSection = props => (
  <BoxComponent
    borderRadius={10}
    backgroundColor={'#fff'}
    mtop={15}
    shadow
    width={'100%'}
    padding={10}>
    <RowComponent justify="space-between">
      <TextComponent>#{props?.id}</TextComponent>
      <TextComponent>
        {moment.unix(props?.created_at).format('DD MMM, YYYY')}
      </TextComponent>
    </RowComponent>
    <RowComponent justify="space-between">
      <TextComponent>{props?.total}</TextComponent>
      <TextComponent>
        {moment.unix(props?.created_at).format('HH:mm A ')}
      </TextComponent>
    </RowComponent>
  </BoxComponent>
);

export default TitleAreaSection;
