import React, {memo} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const RowComponent = props => {
  const combineStyle = {
    margin: props?.margin ? props?.margin : undefined,
    marginLeft: props?.mleft ? props?.mleft : undefined,
    marginRight: props?.mright ? props?.mright : undefined,
    marginTop: props?.mtop ? props?.mtop : undefined,
    marginBottom: props?.mbot ? props?.mbot : undefined,
    marginVertical: props?.my ? props?.my : undefined,
    marginHorizontal: props?.mx ? props?.mx : undefined,
    justifyContent: props?.justify ? props?.justify : null,
    alignItems: props?.alignItems ? props?.alignItems : null,
    width: props?.width ? props?.width : null,
    height: props?.height ? props?.height : null,
    borderWidth: props?.borderWidth ? props?.borderWidth : null,
    borderColor: props?.borderColor ? props?.borderColor : null,
    borderRadius: props?.borderRadius ? props?.borderRadius : null,
    flexDirection: 'row',
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
    backgroundColor: props?.backgroundColor ? props?.backgroundColor : '#fff',
  };
  const {children} = props;

  return <View style={[combineStyle]}>{children}</View>;
};

RowComponent.propTypes = {
  margin: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  mtop: PropTypes.number,
  mbot: PropTypes.number,
  my: PropTypes.number,
  mx: PropTypes.number,
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  shadow: PropTypes.bool,
};

export default memo(RowComponent);
