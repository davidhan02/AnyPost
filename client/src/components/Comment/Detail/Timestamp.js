import React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';

const Timestamp = styled.span`
  margin-left: 4px;
  color: ${props => props.theme.mutedText};
`;

const CommentDetailTimestamp = ({ created }) => (
  <Timestamp>{moment(created).fromNow()}</Timestamp>
);

export default CommentDetailTimestamp;
