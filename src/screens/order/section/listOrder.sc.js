import React, {useCallback, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderUserAction} from 'redux/actions/order';
// import {archived, favorite} from '../../../redux/actions/note';
import ListItem from './listItem.sc';

const ListOrder = props => {
  const state = useSelector(state => state);

  const dispatch = useDispatch();
  const setAction = useCallback((type, data) => {}, [dispatch]);
  useEffect(() => {
    dispatch(getOrderUserAction('orders'));
  }, []);
  return (
    <>
      <FlatList
        data={state?.order?.orders}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              key={'ListOrder' + index}
              navigation={props.navigation}
              menuAction={(type, data) => setAction(type, data)}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 30,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        // onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
      />
    </>
  );
};

export default ListOrder;
