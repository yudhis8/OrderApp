import React, {useCallback} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {archived, favorite} from '../../../redux/actions/note';
import ListItem from './listItem.sc';

const ListProduct = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const setAction = useCallback(
    (type, data) => {
      // if (type == 1) {
      //   dispatch(favorite(data));
      // } else {
      //   dispatch(archived(data));
      // }
    },
    [dispatch],
  );
  return (
    <>
      <FlatList
        data={[1, 2]}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              key={'ListProduk' + index}
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
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        // onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
      />
    </>
  );
};

export default ListProduct;
