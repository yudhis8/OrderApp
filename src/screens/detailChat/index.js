import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonComponent, HeaderComponent} from '../../component';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListChatDetailSection from './section/listChatDetail.sc';

const DetailChatScreen = props => {
  const {
    route: {params},
  } = props;

  return (
    <>
      <HeaderComponent
        title={params?.name ? params?.name : params?.store}
        backButton={true}
        backButtonPress={() => props.navigation.goBack()}
      />
      <ListChatDetailSection {...props} />
    </>
  );
};

export default DetailChatScreen;
