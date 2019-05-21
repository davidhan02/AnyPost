import React from 'react';
import styled from 'styled-components/macro';
import { link, wideFont, smallFont } from '../../styles/helpers';

const Button = styled.button`
  ${link};
  ${smallFont};

  border: none;
  outline: none;

  font-size: 13px;
  cursor: pointer;
  margin-left: auto;

  background-color: transparent;
  color: ${props => props.theme.mutedText};

  :hover {
    color: ${props => props.theme.error};
  }
`;

const DeleteButton = props => <Button onClick={props.onClick}>delete</Button>;

export default DeleteButton;
