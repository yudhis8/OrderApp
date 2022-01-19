import {
  BoxComponent,
  ButtonComponent,
  RowComponent,
  TextInputComponent,
} from 'component';
import React, {useCallback} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {archived, favorite} from '../../../redux/actions/note';
import ListItem from './listItem.sc';
import Feather from 'react-native-vector-icons/Feather';

const dummy = [
  {
    name: 'Miranjo Store',
    chat: 'asd asd asd as dsa',
    user: false,
  },
  {
    name: 'Miranjo Store',
    chat: 'asd asd asd as dsa',
    user: false,
  },
  {
    name: 'Reza',
    chat: 'asd asd asd as dsa',
    user: true,
  },
];
const ListChatDetailSection = props => {
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
        data={dummy}
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
          paddingHorizontal: 10,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        // onEndReached={onEndReached}
        ListFooterComponent={() => {
          return (
            <BoxComponent width={'100%'} mbot={20}>
              <RowComponent justify="space-between" alignItems="center">
                <BoxComponent width={'90%'} mleft={10}>
                  <TextInputComponent
                    placeholder="Type something"
                    borderRadius={10}
                    borderWidth={1}
                    width={'100%'}
                  />
                </BoxComponent>
                <ButtonComponent>
                  <Feather name="send" size={24} color="black" />
                </ButtonComponent>
              </RowComponent>
            </BoxComponent>
          );
        }}
        ListFooterComponentStyle={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
        onEndReachedThreshold={0.01}
      />
    </>
  );
};

export default ListChatDetailSection;
