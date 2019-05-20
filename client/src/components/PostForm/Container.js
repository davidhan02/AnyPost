import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  validUrl,
  textValidator,
  titleValidator
} from '../../utils/validators';
import PostForm from './Component';
import categories from '../../utils/categories';
import { submitPost } from '../../actions/post';

const validate = fields => {
  const errors = {};
  const text = fields.text ? fields.text : '';
  const title = fields.title ? fields.title : '';

  errors.text = textValidator(text);
  errors.title = titleValidator(title);
  if (fields.url) errors.url = validUrl(fields.url);

  return errors;
};

const mapStateToProps = ({ post }) => ({
  loading: post.loading
});

const mapDispatchToProps = { submitPost };

const enhance = compose(
  reduxForm({
    form: 'post',
    initialValues: { category: categories[0] },
    validate
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const PostFormContainer = enhance(PostForm);

export default PostFormContainer;
