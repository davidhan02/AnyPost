import React from 'react';
import styled from 'styled-components/macro';
import { wideFont } from '../../styles/helpers';

const Label = styled.div`
  ${wideFont};
  font-weight: 400;
  display: flex;
  padding: 0 16px;
  border-radius: 0;
  border: 1px solid ${props => props.theme.border};
  border-left: none;
  background-color: ${props => props.theme.foreground};
  align-items: center;
  color: ${props => props.theme.normalText};
`;

const TopMenuLabel = () => <Label>Category</Label>;

export default TopMenuLabel;
