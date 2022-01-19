import {BoxComponent, RowComponent, TextComponent} from 'component';
import React from 'react';

const TrackingSection = ({params}) => (
  <BoxComponent
    borderRadius={10}
    backgroundColor={'#fff'}
    mtop={15}
    shadow
    width={'100%'}
    padding={10}>
    {[1, 2, 3].map((data, index) => {
      return (
        <BoxComponent mtop={20}>
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
              <TextComponent>On Delivery</TextComponent>
              <TextComponent>09:58 AM - 12 Jan, 2019</TextComponent>
            </BoxComponent>
          </RowComponent>
        </BoxComponent>
      );
    })}
  </BoxComponent>
);

export default TrackingSection;
