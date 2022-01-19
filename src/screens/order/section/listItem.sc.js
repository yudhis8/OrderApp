import React, {useState, useCallback, memo} from 'react';
import {Text, View} from 'react-native';
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

  const [visible, setVisible] = useState(false);

  const hideMenu = useCallback(
    type => {
      menuAction(type, item);
      setVisible(false);
    },
    [menuAction, item],
  );

  const showMenu = useCallback(() => setVisible(true), []);

  const onNavigate = useCallback(() => {
    navigation.navigate('DetailNote', item);
  }, [item, navigation]);
  return (
    <BoxComponent
      borderRadius={10}
      backgroundColor={'#fff'}
      mtop={15}
      shadow
      padding={10}>
      <ButtonComponent onPress={onNavigate}>
        <RowComponent justify={'space-between'} alignItems={'center'}>
          <TextComponent type={'600'} size={16}>
            {item?.title}
          </TextComponent>
          <ButtonComponent onPress={showMenu}>
            <Entypo name="dots-three-vertical" size={14} color="black" />
          </ButtonComponent>
        </RowComponent>
        <TextComponent size={14} mtop={5} mbot={5}>
          {item?.body?.note}
        </TextComponent>
        <TextComponent size={10}>
          {moment(
            item?.updated_at?.replace(' +0700', ''),
            'YYYY-MM-DD HH:mm:ss',
          ).format('DD MMM, YYYY HH:mm')}
        </TextComponent>
      </ButtonComponent>
    </BoxComponent>
  );
};

ListItem.propsType = {
  item: PropTypes.object,
  navigation: PropTypes.object,
  menuAction: PropTypes.func,
};

export default memo(ListItem);
