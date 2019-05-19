import React from 'react';
import BodyWrapper from './Wrapper';
import { Route } from 'react-router-dom';
import styled from 'styled-components/macro';

import PostListContainer from '../PostList/Container';

const MainSection = styled.main`
  flex: 1;
  min-width: 0;
`;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Route exact path="/" component={PostListContainer} />
      <Route
        exact
        path="/a/:category"
        render={({ match }) => (
          <PostListContainer category={match.params.category} />
        )}
      />
      <Route
        exact
        path="/u/:userId"
        render={({ match }) => (
          <PostListContainer userId={match.params.userId} />
        )}
      />
    </MainSection>
  </BodyWrapper>
);

export default Body;
