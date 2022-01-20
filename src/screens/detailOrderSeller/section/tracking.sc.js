import {
  BoxComponent,
  ButtonComponent,
  RowComponent,
  TextComponent,
} from 'component';
import {db} from 'helpers/Firebase';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateOrderAction} from 'redux/actions/order';

const TrackingSection = props => {
  const [status, setStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState(props?.status);
  const dispatch = useDispatch();
  useEffect(() => {
    getDatabaseStatus();
  }, []);

  const getDatabaseStatus = async () => {
    const getDB = await db
      .collection('orders')
      .doc(props?.id)
      .collection('status_update')
      .orderBy('created_at', 'desc')
      .onSnapshot(result => {
        let array = [];

        result.docs.forEach(item => {
          let id = item.id;
          let data = item.data();

          array.push({id, ...data});
        });
        setStatus(array);
      });
  };

  const updateStatus = status => {
    console.log('🚀 ~ file: tracking.sc.js ~ line 38 ~ status', status);
    setCurrentStatus(status);
    dispatch(
      updateOrderAction({
        ...props,
        status: status,
      }),
    );
  };

  return (
    <BoxComponent
      borderRadius={10}
      backgroundColor={'#fff'}
      mtop={15}
      shadow
      width={'100%'}
      padding={10}>
      {status.map((data, index) => {
        return (
          <BoxComponent key={'ListTracking' + index} mtop={20}>
            {index === 0 ? null : (
              <RowComponent alignItems="center">
                <BoxComponent
                  width={'10%'}
                  justifyContent="center"
                  alignItems="center"
                  mright={10}>
                  <BoxComponent
                    backgroundColor="blue"
                    height={75}
                    width={3}
                    borderRadius={35}
                    position="absolute"
                  />
                </BoxComponent>
              </RowComponent>
            )}
            <RowComponent alignItems="center">
              <BoxComponent
                width={'10%'}
                justifyContent="center"
                alignItems="center"
                mright={10}>
                <BoxComponent
                  backgroundColor="blue"
                  height={18}
                  width={18}
                  borderRadius={35}
                />
              </BoxComponent>
              <BoxComponent>
                <TextComponent>{data?.name}</TextComponent>
                <TextComponent>
                  {moment
                    .unix(data?.created_at?.seconds)
                    .format('HH:mm A - DD MMM, YYYY')}
                </TextComponent>
              </BoxComponent>
            </RowComponent>
          </BoxComponent>
        );
      })}
      <RowComponent mtop={20}>
        {currentStatus == 'Pending' && (
          <ButtonComponent
            onPress={() => updateStatus('Process')}
            backgroundColor="blue"
            pleft={10}
            pright={10}
            ptop={10}
            pbot={10}>
            <TextComponent color="#fff">Accept Order</TextComponent>
          </ButtonComponent>
        )}
        {currentStatus == 'Pending' && (
          <ButtonComponent
            onPress={() => updateStatus('Reject')}
            backgroundColor="red"
            pleft={10}
            pright={10}
            ptop={10}
            pbot={10}>
            <TextComponent color="#fff">Reject Order</TextComponent>
          </ButtonComponent>
        )}
        {currentStatus == 'Process' && (
          <ButtonComponent
            onPress={() => updateStatus('Packing')}
            backgroundColor="green"
            pleft={10}
            pright={10}
            ptop={10}
            pbot={10}>
            <TextComponent color="#fff">Packing Order</TextComponent>
          </ButtonComponent>
        )}
        {currentStatus == 'Packing' && (
          <ButtonComponent
            onPress={() => updateStatus('Shipping')}
            backgroundColor="yellow"
            pleft={10}
            pright={10}
            ptop={10}
            pbot={10}>
            <TextComponent color="#000">Shipping</TextComponent>
          </ButtonComponent>
        )}
      </RowComponent>
    </BoxComponent>
  );
};

export default TrackingSection;
