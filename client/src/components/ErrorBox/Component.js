import React from 'react';
import ErrorBoxMessage from './Message';
import styled from 'styled-components/macro';
import { transition } from '../shared/helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const className = 'message';

const Wrapper = styled.div`
  ${transition('opacity', 'transform')};
  position: fixed;
  top: 25px;
  left: 0;
  right: 0;
  z-index: 99;
  text-align: center;
  pointer-events: none;

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

class ErrorBox extends React.Component {
  render() {
    return (
      <TransitionGroup component={null}>
        {this.props.error && (
          <CSSTransition classNames={className} timeout={300}>
            <Wrapper>
              <ErrorBoxMessage>{this.props.error.msg}</ErrorBoxMessage>
            </Wrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default ErrorBox;
