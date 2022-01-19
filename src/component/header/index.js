import React from 'react';
import {
  BoxComponent,
  ButtonComponent,
  RowComponent,
  TextComponent,
} from '../index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

const HeaderComponent = props => {
  const {title, backButton, rightButton} = props;
  return (
    <RowComponent
      justify={'space-between'}
      height={60}
      alignItems={'center'}
      shadow>
      <BoxComponent pleft={10}>
        <RowComponent alignItems={'center'}>
          {backButton && (
            <ButtonComponent>
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </ButtonComponent>
          )}
          <TextComponent mleft={20} size={20} title={title} />
        </RowComponent>
      </BoxComponent>

      <BoxComponent pright={20}>
        {rightButton && (
          <ButtonComponent>
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </ButtonComponent>
        )}
      </BoxComponent>
    </RowComponent>
  );
};

HeaderComponent.propsType = {
  title: PropTypes.string,
  backButton: PropTypes.bool,
  rightButton: PropTypes.bool,
};

export default HeaderComponent;
