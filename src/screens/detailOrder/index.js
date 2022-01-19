import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {BoxComponent, ButtonComponent, HeaderComponent} from '../../component';
import ProductListSection from './section/productList.sc';
import TitleAreaSection from './section/titleArea.sc';
import TrackingSection from './section/tracking.sc';

const DetailOrder = props => {
  return (
    <>
      <HeaderComponent title={'Details'} backButton={true} />
      <BoxComponent padding={20}>
        <TitleAreaSection />
        <ProductListSection />
        <TrackingSection />
      </BoxComponent>
    </>
  );
};

const styles = StyleSheet.create({
  buttonFly: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#54BFF8',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
