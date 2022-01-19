import React, {memo} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const BoxComponent = props => {
  const combineStyle = {
    padding: props?.padding ? props?.padding : undefined,
    paddingLeft: props?.pleft ? props?.pleft : undefined,
    paddingRight: props?.pright ? props?.pright : undefined,
    paddingTop: props?.ptop ? props?.ptop : undefined,
    paddingBottom: props?.pbot ? props?.pbot : undefined,
    paddingVertical: props?.py ? props?.py : undefined,
    paddingHorizontal: props?.px ? props?.px : undefined,
    margin: props?.margin ? props?.margin : undefined,
    marginLeft: props?.mleft ? props?.mleft : undefined,
    marginRight: props?.mright ? props?.mright : undefined,
    marginTop: props?.mtop ? props?.mtop : undefined,
    marginBottom: props?.mbot ? props?.mbot : undefined,
    marginVertical: props?.my ? props?.my : undefined,
    marginHorizontal: props?.mx ? props?.mx : undefined,
    justifyContent: props?.justifyContent ? props?.justifyContent : null,
    alignItems: props?.alignItems ? props?.alignItems : null,
    width: props?.width ? props?.width : undefined,
    height: props?.height ? props?.height : null,
    borderWidth: props?.borderWidth ? props?.borderWidth : null,
    borderColor: props?.borderColor ? props?.borderColor : null,
    borderRadius: props?.borderRadius ? props?.borderRadius : null,
    backgroundColor: props?.backgroundColor ? props?.backgroundColor : null,
    shadowColor: props?.shadow ? '#000' : undefined,
    shadowOffset: props?.shadow
      ? {
          width: 0,
          height: 2,
        }
      : {},
    shadowOpacity: props?.shadow ? 0.3 : 0,
    shadowRadius: props?.shadow ? 3 : 0,
    elevation: props?.shadow ? 3 : 0,
    flex: props?.flex ? props.flex : undefined,
  };
  const {children} = props;

  return <View style={[combineStyle]}>{children}</View>;
};

BoxComponent.propTypes = {
  padding: PropTypes.number,
  pleft: PropTypes.number,
  pright: PropTypes.number,
  ptop: PropTypes.number,
  pbot: PropTypes.number,
  py: PropTypes.number,
  px: PropTypes.number,
  margin: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  mtop: PropTypes.number,
  mbot: PropTypes.number,
  my: PropTypes.number,
  mx: PropTypes.number,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  shadow: PropTypes.bool,
  flex: PropTypes.number,
};

export default memo(BoxComponent);
