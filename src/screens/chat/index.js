import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonComponent, HeaderComponent} from '../../component';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListChatSection from './section/listChat.sc';

const ChatScreen = props => {
  return (
    <>
      <HeaderComponent title={'Chat'} />
      <ListChatSection {...props} />
    </>
  );
};

export default ChatScreen;
