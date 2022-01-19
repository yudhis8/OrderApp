import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonComponent, HeaderComponent} from '../../component';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListChatDetailSection from './section/listChatDetail.sc';

const DetailChatScreen = props => {
  return (
    <>
      <HeaderComponent
        title={'Miranjo Store'}
        backButton={true}
        backButtonPress={() => props.navigation.goBack()}
      />
      <ListChatDetailSection />
    </>
  );
};

export default DetailChatScreen;
