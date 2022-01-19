import React, {memo} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ButtonComponent = props => {
  const combineStyle = {
    padding: props?.padding ? props?.padding : 0,
    paddingLeft: props?.pleft ? props?.pleft : 0,
    paddingRight: props?.pright ? props?.pright : 0,
    paddingTop: props?.ptop ? props?.ptop : 0,
    paddingBottom: props?.pbot ? props?.pbot : 0,
    paddingVertical: props?.py ? props?.py : 0,
    paddingHorizontal: props?.px ? props?.px : 0,
    margin: props?.margin ? props?.margin : 0,
    marginLeft: props?.mleft ? props?.mleft : 0,
    marginRight: props?.mright ? props?.mright : 0,
    marginTop: props?.mtop ? props?.mtop : 0,
    marginBottom: props?.mbot ? props?.mbot : 0,
    marginVertical: props?.my ? props?.my : 0,
    marginHorizontal: props?.mx ? props?.mx : 0,
    backgroundColor: props?.backgroundColor ? props?.backgroundColor : null,
    flex: props?.flex ? props?.flex : 0,
    justifyContent: props?.justifyContent ? props?.justifyContent : null,
    alignItems: props?.alignItems ? props?.alignItems : null,
    alignSelf: props?.alignSelf ? props?.alignSelf : null,
    width: props?.width ? props?.width : undefined,
    height: props?.height ? props?.height : undefined,
    borderWidth: props?.borderWidth ? props?.borderWidth : 0,
    borderRadius: props?.borderRadius ? props?.borderRadius : 0,
    borderColor: props?.borderColor ? props?.borderColor : undefined,
  };
  const {children, style, loading} = props;

  return (
    <TouchableOpacity {...props} style={[combineStyle, style]}>
      {loading ? <ActivityIndicator /> : children}
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
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
  backgroundColor: PropTypes.string,
  flex: PropTypes.number,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  alignSelf: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

export default memo(ButtonComponent);
