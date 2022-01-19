import React, {memo} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const TextComponent = props => {
  const combineStyle = {
    margin: props?.margin ? props?.margin : 0,
    marginLeft: props?.mleft ? props?.mleft : 0,
    marginRight: props?.mright ? props?.mright : 0,
    marginTop: props?.mtop ? props?.mtop : 0,
    marginBottom: props?.mbot ? props?.mbot : 0,
    marginVertical: props?.my ? props?.my : 0,
    marginHorizontal: props?.mx ? props?.mx : 0,
    textAlign: props?.textAlign ? props?.textAlign : null,
    alignSelf: props?.alignSelf ? props?.alignSelf : null,
    lineHeight: props?.lineHeight ? props?.lineHeight : null,
    textDecorationLine: props?.decoration ? props?.decoration : 'none',
    textDecorationColor:
      props?.decoration && props?.decorationColor
        ? props?.decorationColor
        : undefined,
    color: props?.color ? props?.color : '#000',
    backgroundColor: props?.backgroundColor ? props?.backgroundColor : null,
    fontSize: props?.size ? props?.size : 14,
    fontWeight: props?.fontWeight ? props?.fontWeight : 'normal',
    width: props?.width ? props?.width : null,
  };
  const {children, title} = props;

  return <Text style={[combineStyle]}>{children || title}</Text>;
};

TextComponent.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  alignSelf: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  lineHeight: PropTypes.number,
  mtop: PropTypes.number,
  mbot: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  children: PropTypes.node,
  decoration: PropTypes.oneOf([
    'none',
    'underline',
    'line-through',
    'underline line-through',
  ]),
  decorationColor: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(TextComponent);
