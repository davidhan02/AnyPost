import React from 'react';
import ErrorDisplayMessage from './Message';
import styled from 'styled-components/macro';
import { transition } from '../../styles/helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const className = 'message';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 20px;

  z-index: 99;
  text-align: center;
  pointer-events: none;
  ${transition('opacity', 'transform')};

  &.${className}-enter {
    opacity: 0;
    transform: translateY(-25%);
  }
  &.${className}-enter-active {
    opacity: 1;
    transform: translateY(0);
  }
  &.${className}-exit {
    opacity: 1;
  }
  &.${className}-exit-active {
    opacity: 0;
  }
`;

const ErrorDisplay = ({ error }) => {
  return (
    <TransitionGroup component={null}>
      {error && (
        <CSSTransition classNames={className} timeout={300}>
          <Wrapper>
            <ErrorDisplayMessage>{error.msg || error}</ErrorDisplayMessage>
          </Wrapper>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default ErrorDisplay;
