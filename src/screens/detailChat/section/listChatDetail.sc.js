import {
  BoxComponent,
  ButtonComponent,
  RowComponent,
  TextInputComponent,
} from 'component';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {archived, favorite} from '../../../redux/actions/note';
import ListItem from './listItem.sc';
import Feather from 'react-native-vector-icons/Feather';
import {
  createChatAction,
  createChatSellerAction,
  getDetailListChatAction,
} from 'redux/actions/chat';
import {getCurrentUserDatabase} from 'helpers/Firebase';

const Input = ({setMessage, message, sent}) => {
  return (
    <BoxComponent
      style={{bottom: 0}}
      position="absolute"
      width={'100%'}
      alignItems="center"
      mbot={20}>
      <RowComponent width={'90%'} justify="space-between" alignItems="center">
        <BoxComponent width={'90%'}>
          <TextInputComponent
            placeholder="Type something"
            borderRadius={10}
            borderWidth={1}
            width={'100%'}
            onChangeText={text => setMessage(text)}
            value={message}
          />
        </BoxComponent>
        <ButtonComponent onPress={() => sent()}>
          <Feather name="send" size={24} color="black" />
        </ButtonComponent>
      </RowComponent>
    </BoxComponent>
  );
};
const ListChatDetailSection = props => {
  const {
    route: {params},
  } = props;
  const [userType, setUserType] = useState();
  const [message, setMessage] = useState('');
  const flatListRef = useRef();
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailListChatAction(params?.id));
  }, []);

  useEffect(() => {
    getRoleUser();
  }, []);

  const getRoleUser = async () => {
    const query = await getCurrentUserDatabase(state?.auth?.user);
    if (query.docs.length !== 0) {
      query.docs.forEach(item => {
        let id = item.id;
        let data = item.data();

        setUserType(data?.level);
      });
    }
  };

  const sentChat = () => {
    setMessage('');
    if (userType === 'buyer') {
      dispatch(createChatAction({...params, message: message}));
    } else {
      dispatch(createChatSellerAction({...params, message: message}));
    }
  };
  return (
    <>
      <FlatList
        ref={flatListRef}
        data={state?.chat?.detailChats}
        renderItem={({item, index}) => {
          return (
            <ListItem
              state={state}
              item={item}
              key={'ListChat' + index}
              navigation={props.navigation}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 10,
          flexGrow: 1,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
        // onEndReached={onEndReached}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
        onLayout={() => flatListRef.current.scrollToEnd({animated: true})}
        onEndReachedThreshold={100}
      />
      <Input
        sent={() => sentChat()}
        setMessage={text => setMessage(text)}
        message={message}
      />
    </>
  );
};

export default ListChatDetailSection;
