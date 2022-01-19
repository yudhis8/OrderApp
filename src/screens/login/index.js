import {
  BoxComponent,
  TextComponent,
  TextInputComponent,
  ButtonComponent,
} from 'component';
import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authAction} from 'redux/actions/auth';

const LoginScreen = ({params}) => {
  const [userName, setUserName] = useState('reza@gmail.com');
  const [password, setPassword] = useState('123456');
  const disptach = useDispatch();
  const authState = useSelector(state => state.auth);
  const login = () => {
    const data = {
      username: userName,
      password: password,
    };
    disptach(authAction(data));
  };
  return (
    <BoxComponent flex={1} justifyContent="center" alignItems="center">
      <BoxComponent width={'80%'}>
        <TextComponent mbot={20} size={20} alignSelf="center">
          Auth
        </TextComponent>
        <TextInputComponent
          label={'Email'}
          labelStyle={{mleft: 5, size: 16, mbot: 10}}
          placeholder="Email"
          borderWidth={0.5}
          borderColor="grey"
          borderRadius={15}
          width={'100%'}
          mbot={20}
          pleft={10}
          onChangeText={text => setUserName(text)}
          value={userName}
        />
        <TextInputComponent
          label={'Password'}
          labelStyle={{mleft: 5, size: 16, mbot: 10}}
          placeholder="Password"
          borderWidth={0.5}
          borderColor="grey"
          borderRadius={15}
          width={'100%'}
          secureTextEntry={true}
          pleft={10}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <ButtonComponent
          loading={authState?.fetching}
          onPress={() => login()}
          justifyContent="center"
          alignSelf="center"
          alignItems="center"
          backgroundColor="blue"
          borderRadius={10}
          ptop={10}
          pbot={10}
          mtop={20}
          width={100}>
          <TextComponent color="#fff">Login</TextComponent>
        </ButtonComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default LoginScreen;
