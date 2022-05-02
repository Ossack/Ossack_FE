import React from "react";
import styled from "styled-components";

import { TiHeartOutline } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight,MdClose } from "react-icons/md";

import pro_edit from "../static/images/pro_edit.svg";

const Button = (props) => {
  const {
    color,
    _onClick,
    children,
    margin,
    width,
    is_right,
    padding,
    backgroundColor,
    height,
    borderRadius,
    top,
    bottom,
    left,
    right,
    hover,
    display,
    is_like,
    fontSize,
    position,
    is_back,
    is_edit,
    is_close,
    _disabled,
  } = props;

  const styles = {
    margin,
    width,
    padding,
    position,
    backgroundColor,
    color,
    height,
    borderRadius,
    top,
    bottom,
    left,
    right,
    hover,
    display,
    fontSize,
  };
  if (is_like) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <Heart />
        </BtnBox>
      </React.Fragment>
    );
  }  
  if (is_close) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <X />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (is_right) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <Right />
        </BtnBox>
      </React.Fragment>
    );
  }
  if (is_back) {
    return (
      <React.Fragment>
        <BtnBox onClick={_onClick} {...styles}>
          <Back />
        </BtnBox>
      </React.Fragment>
    );
  }

  if (is_edit) {
    return (
      <React.Fragment>
        <BBox onClick={_onClick} {...styles}>
          <img src={pro_edit} alt="수정 아이콘" />
        </BBox>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ButtonBox {...styles} onClick={_onClick} disabled={_disabled}>
        {children}
      </ButtonBox>
    </React.Fragment>
  );
};

Button.defaultProps = {
  position: null,
  children: null,
  _onClick: () => {},
  isFloat: false,
  margin: "auto",
  width: "100%",
  padding: "12px 0px",
  color: "black",
  height: "50px",
  top: null,
  bottom: null,
  left: null,
  right: null,
  hover: null,
  display: null,
  fontSize: null,
};

const ButtonBox = styled.button`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  ${(props) =>
    props.backgroundColor
      ? `background-color:${props.backgroundColor}`
      : "background-color: #ccc"};
  box-sizing: border-box;
  font-weight: bold;
  border: none;
  ${(props) =>
    props.borderRadius
      ? `border-radius:${props.borderRadius}`
      : "border-radius: 0px"};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background-color: ${(props) => props.hover};
  }
  vertical-align: middle;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  flex-shrink: 0;
  display: ${(props) => props.display};
`;

const BtnBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
`;
const BBox = styled.button`
  ${(props) =>
    props.backgroundColor
      ? `background-color:${props.backgroundColor}`
      : "background-color: #494949"};
  border: 2px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.color};
  width: 28px;
  height: 28px;
  border-radius: 14px;
`;
const Heart = styled(TiHeartOutline)`
  width: 24px;
  height: 24px;
`;
const Back = styled(MdKeyboardArrowLeft)`
  width: 24px;
  height: 24px;
`;
const Right = styled(MdKeyboardArrowRight)`
  width: 24px;
  height: 24px;
`;
const X=styled(MdClose)`
  width: 24px;
  height: 24px;
`

export default Button;
