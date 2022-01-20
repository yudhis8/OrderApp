import React, {useCallback, useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getListChatAction} from 'redux/actions/chat';
// import {archived, favorite} from '../../../redux/actions/note';
import ListItem from './listItem.sc';

const ListChatSection = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListChatAction('chats'));
  }, []);

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
        data={state?.chat?.chats}
        renderItem={({item, index}) => {
          return (
            <ListItem
              item={item}
              key={'ListChat' + index}
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

export default ListChatSection;
