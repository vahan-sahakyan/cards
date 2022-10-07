import React from 'react';
import './Button.scss';
import styled, { css } from 'styled-components';

const primaryCSS = css`
  background-color: #333;
  color: #fff;
  :hover {
    background-color: #222;
    color: #fff;
  }
  :active {
    color: #eee;
  }
`;
const defaultCSS = css`
  background-color: #0001;
  :hover {
    background-color: #0002;
    color: #333;
  }
  :active {
    color: #000;
  }
`;

const getTypeStyles = ({ type }) => {
  if (type === 'primary') {
    return primaryCSS;
  }
  if (type === 'default') {
    return defaultCSS;
  }
};

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  border-color: #333;
  border-style: solid;
  border-width: 1px;

  ${getTypeStyles};
`;
const Button = ({ type, text, handler }) => (
  <ButtonStyled type={type} onClick={handler}>
    {text}
  </ButtonStyled>
);

export default Button;
