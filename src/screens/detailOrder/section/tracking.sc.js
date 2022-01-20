import {BoxComponent, RowComponent, TextComponent} from 'component';
import {db} from 'helpers/Firebase';
import moment from 'moment';
import React, {useEffect, useState} from 'react';

const TrackingSection = props => {
  const [status, setStatus] = useState([]);
  console.log('🚀 ~ file: tracking.sc.js ~ line 8 ~ status', status);

  useEffect(() => {
    getDatabaseStatus();
  }, []);

  const getDatabaseStatus = async () => {
    const getDB = await db
      .collection('orders')
      .doc(props?.id)
      .collection('status_update')
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
    </BoxComponent>
  );
};

export default TrackingSection;
