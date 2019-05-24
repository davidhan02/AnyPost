import React, { Component } from 'react';
import styled from 'styled-components/macro';
import PostVoteUpvote from './Upvote';
import PostVoteDownvote from './Downvote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30px;
  padding: 4px;

  font-size: 12px;
  font-weight: 500;

  line-height: 22px;
  text-align: center;
  color: ${props => props.theme.normalText};
  ${props => !props.full && 'justify-content: center'};
`;

class PostVote extends Component {
  constructor(props) {
    super(props);
    const didVote = PostVote.existingVote(props);
    this.state = {
      score: props.score,
      didVote,
      didUpvote: didVote === 1,
      didDownvote: didVote === -1
    };
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.props.score !== nextProps.score) {
      const didVote = PostVote.existingVote(nextProps);
      this.setState({
        score: nextProps.score,
        didVote,
        didUpvote: didVote === 1,
        didDownvote: didVote === -1
      });
    } else if (
      this.props.user.id !== nextProps.user.id &&
      !nextProps.isAuthenticated
    ) {
      this.setState({
        didVote: false,
        didUpvote: false,
        didDownvote: false
      });
    }
  }

  static existingVote = ({ user, votes }) => {
    const existingVote =
      user && votes && votes.find(vote => vote.user === user.id);
    return existingVote ? existingVote.vote : 0;
  };

  castVote = vote => {
    const {
      id,
      comment,
      commentVote,
      submitVote,
      isAuthenticated
    } = this.props;
    if (isAuthenticated) {
      comment ? commentVote(id, vote) : submitVote(id, vote);
      this.setState({
        score: this.state.score + vote - this.state.didVote,
        didVote: vote,
        didUpvote: vote === 1,
        didDownvote: vote === -1
      });
    }
  };

  upvote = () => this.castVote(this.state.didUpvote ? 0 : 1);

  downvote = () => this.castVote(this.state.didDownvote ? 0 : -1);

  render() {
    const { full, comment, isAuthenticated } = this.props;
    return (
      <Wrapper full={full} comment={comment}>
        <PostVoteUpvote
          canVote={!!isAuthenticated}
          didVote={this.state.didUpvote}
          onClick={this.upvote}
        />
        <span>{this.state.score}</span>
        <PostVoteDownvote
          canVote={!!isAuthenticated}
          didVote={this.state.didDownvote}
          onClick={this.downvote}
        />
      </Wrapper>
    );
  }
}

export default PostVote;
