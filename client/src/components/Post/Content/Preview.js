import styled from 'styled-components/macro';
import { overflow } from '../../../styles/helpers';

const PostContentPreview = styled.div`
  ${overflow};
  font-size: 13px;
  max-width: 800px;
  line-height: 30px;
  color: ${props => props.theme.mutedText};
`;

export default PostContentPreview;
