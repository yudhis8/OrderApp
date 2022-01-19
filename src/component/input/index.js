import React, {memo} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {BoxComponent, TextComponent} from 'component';

const TextInputComponent = props => {
  const combineStyle = {
    margin: props?.margin ? props?.margin : 0,
    marginLeft: props?.mleft ? props?.mleft : 0,
    marginRight: props?.mright ? props?.mright : 0,
    marginTop: props?.mtop ? props?.mtop : 0,
    marginBottom: props?.mbot ? props?.mbot : 0,
    marginVertical: props?.my ? props?.my : 0,
    marginHorizontal: props?.mx ? props?.mx : 0,
    padding: props?.padding ? props?.padding : undefined,
    paddingLeft: props?.pleft ? props?.pleft : undefined,
    paddingRight: props?.pright ? props?.pright : undefined,
    paddingTop: props?.ptop ? props?.ptop : undefined,
    paddingBottom: props?.pbot ? props?.pbot : undefined,
    paddingVertical: props?.py ? props?.py : undefined,
    paddingHorizontal: props?.px ? props?.px : undefined,
    textAlign: props?.textAlign ? props?.textAlign : null,
    lineHeight: props?.lineHeight ? props?.lineHeight : null,
    textDecorationLine: props?.decoration ? props?.decoration : 'none',
    textDecorationColor:
      props?.decoration && props?.decorationColor
        ? props?.decorationColor
        : undefined,
    color: props?.color ? props?.color : '#000',
    backgroundColor: props?.backgroundColor ? props?.backgroundColor : null,
    fontSize: props?.size ? props?.size : 14,
    fontWeight: props?.type ? props?.type : 'normal',
    borderWidth: props?.borderWidth ? props?.borderWidth : 0,
    borderRadius: props?.borderRadius ? props?.borderRadius : 0,
    borderColor: props?.borderColor ? props?.borderColor : undefined,
    width: props?.width ? props?.width : undefined,
  };
  const {label, labelStyle} = props;
  return (
    <BoxComponent>
      {label && <TextComponent {...labelStyle}>{label}</TextComponent>}
      <TextInput {...props} style={[combineStyle]} />
    </BoxComponent>
  );
};

TextInputComponent.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  lineHeight: PropTypes.number,
  mtop: PropTypes.number,
  mbot: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  padding: PropTypes.number,
  pleft: PropTypes.number,
  pright: PropTypes.number,
  ptop: PropTypes.number,
  pbot: PropTypes.number,
  py: PropTypes.number,
  px: PropTypes.number,
  children: PropTypes.node,
  decoration: PropTypes.oneOf([
    'none',
    'underline',
    'line-through',
    'underline line-through',
  ]),
  decorationColor: PropTypes.string,
  fontWeight: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(TextInputComponent);
