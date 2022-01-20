import {BoxComponent} from 'component';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCartAction} from 'redux/actions/cart';
import {getProductAction} from 'redux/actions/products';
import ListItem from './listItem.sc';

const ListProduct = props => {
  const [currentIdCart, setCurrentIdCart] = useState(['0']);

  const state = useSelector(state => state);
  console.log('🚀 ~ file: listProduct.sc.js ~ line 9 ~ state', state);
  const dispatch = useDispatch();
  const setAction = useCallback(
    item => {
      console.log('🚀 ~ file: listProduct.sc.js ~ line 15 ~ item', item);
      dispatch(setCartAction(item));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getProductAction('products'));
  }, []);

  useEffect(() => {
    const new_current = [currentIdCart];
    state.cart.carts.map(data => {
      new_current.push(data.id);
    });
    setCurrentIdCart(new_current);
  }, [state.cart.carts]);

  const productsMemo = useMemo(() => {
    return state?.product?.products.map(data => {
      data.selected = currentIdCart.includes(data.id);
      console.log(data);
      return data;
    });
  }, [currentIdCart, state]);

  return (
    <>
      <FlatList
        data={productsMemo}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              key={'ListProduk' + index}
              navigation={props.navigation}
              onAddPress={() => setAction(item)}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 30,
          flexGrow: 1,
        }}
        ListEmptyComponent={() => {
          return (
            <BoxComponent>
              <ActivityIndicator />
            </BoxComponent>
          );
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        // onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
      />
    </>
  );
};

export default ListProduct;
