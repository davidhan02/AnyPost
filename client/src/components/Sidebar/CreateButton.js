import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreatePostButton = styled(Button)`
  padding: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 2px 2px 0 0;
`;

const SidebarCreateButton = () => (
  <CreatePostButton as={Link} to="/create">
    create post
  </CreatePostButton>
);

export default SidebarCreateButton;
