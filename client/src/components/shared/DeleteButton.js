import React from 'react';
import styled from 'styled-components/macro';
import { link, smallFont } from '../../styles/helpers';

const Button = styled.button`
  ${link};

  border: none;
  outline: none;

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
