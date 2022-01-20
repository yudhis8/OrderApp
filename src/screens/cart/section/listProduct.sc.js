import React, {useCallback} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {minusCartAction, setCartAction} from 'redux/actions/cart';

import ListItem from './listItem.sc';

const ListProduct = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const setAction = useCallback(
    (type, data) => {
      if (type == 'plus') {
        dispatch(setCartAction(data));
      } else {
        dispatch(minusCartAction(data));
      }
    },
    [dispatch],
  );
  return (
    <>
      <FlatList
        data={state?.cart?.carts}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              key={'ListProduk' + index}
              navigation={props.navigation}
              onActionPress={type => setAction(type, item)}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 30,
          flexGrow: 1,
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
