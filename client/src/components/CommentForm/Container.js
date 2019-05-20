import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitComment } from '../../actions/post';
import CommentForm from './Component';

const mapDispatchToProps = { submitComment };

const enhance = compose(
  reduxForm({ form: 'comment' }),
  connect(
    null,
    mapDispatchToProps
  )
);

const CommentFormContainer = enhance(CommentForm);

export default CommentFormContainer;
