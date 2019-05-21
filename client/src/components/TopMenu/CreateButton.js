import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreateButton = styled(Button)`
  display: flex;
  padding: 0 16px;
  border-radius: 0;
  align-items: center;
  text-decoration: none;
`;

const TopMenuCreateButton = () => (
  <CreateButton as={Link} to="/create">
    create post
  </CreateButton>
);

export default TopMenuCreateButton;
