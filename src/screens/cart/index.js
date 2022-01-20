import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BoxComponent,
  ButtonComponent,
  HeaderComponent,
  TextComponent,
} from '../../component';
import {useSelector, useDispatch} from 'react-redux';
import {removeCartAction} from 'redux/actions/cart';

import ListProduct from './section/listProduct.sc';
import {db} from 'helpers/Firebase';
import firestore from '@react-native-firebase/firestore';

const CartScreen = props => {
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  let total = 0;

  const orderNow = async () => {
    if (cart?.carts?.length > 0) {
      const createReff = await db.collection('orders').doc();

      createReff.set({
        products: cart?.carts,
        status: 'Pending',
        subtotal: total,
        total: total,
        created_at: firestore.FieldValue.serverTimestamp(),
        uid_buyer: auth?.user?.user?.uid,
        buyer_name: auth?.user?.user?.email,
        uid_seller: 'hrPF4wsmyieaWtO3qlLIqLgNZ3f2',
        store: 'Miranjo Store',
      });

      createReff.collection('status_update').doc().set({
        name: 'Pending',
        created_at: firestore.FieldValue.serverTimestamp(),
      });
      dispatch(removeCartAction());
      props.navigation.navigate('Order');
    }
  };
  cart?.carts?.map(data => {
    total = total + data.total;
  });
  return (
    <>
      <HeaderComponent
        title={'Cart List'}
        backButton={true}
        backButtonPress={() => props.navigation.goBack()}
      />
      <ListProduct />
      <ButtonComponent style={styles.buttonFly} onPress={() => orderNow()}>
        <TextComponent color="#fff">Order Now!</TextComponent>
      </ButtonComponent>
      <BoxComponent style={styles.flyTotal}>
        <TextComponent color="#000">Total Rp. {total}</TextComponent>
      </BoxComponent>
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
  flyTotal: {
    position: 'absolute',
    bottom: 70,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  redPostion: {
    top: -10,
    right: -5,
    zIndex: 99,
  },
});

export default CartScreen;
