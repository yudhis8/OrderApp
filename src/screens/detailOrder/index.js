import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BoxComponent,
  ButtonComponent,
  HeaderComponent,
  TextComponent,
} from 'component';
import ProductListSection from './section/productList.sc';
import TitleAreaSection from './section/titleArea.sc';
import TrackingSection from './section/tracking.sc';

const DetailOrder = props => {
  const {
    route: {params},
  } = props;

  const directToChat = () => {
    props.navigation.navigate('DetailChat', params);
  };
  return (
    <>
      <HeaderComponent
        title={'Details'}
        backButton={true}
        backButtonPress={() => props.navigation.goBack()}
      />
      <BoxComponent padding={20}>
        <TitleAreaSection {...params} />
        <ProductListSection {...params} />
        <TrackingSection {...params} />
      </BoxComponent>
      <ButtonComponent style={styles.buttonFly} onPress={() => directToChat()}>
        <TextComponent color="#fff">Tanya Penjual</TextComponent>
      </ButtonComponent>
    </>
  );
};

const styles = StyleSheet.create({
  buttonFly: {
    position: 'absolute',
    bottom: 20,

    backgroundColor: '#54BFF8',
    width: '50%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default DetailOrder;
