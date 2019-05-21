import React from 'react';
import styled from 'styled-components/macro';
import { wideFont } from '../../../styles/helpers';

const Header = styled.span`
  ${wideFont};

  padding: 16px 12px;
  display: block;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.mutedText};
`;

const SidebarCategoryListHeader = () => <Header>categories</Header>;

export default SidebarCategoryListHeader;
