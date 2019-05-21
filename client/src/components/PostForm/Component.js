import React, { Component } from 'react';
import { Field } from 'redux-form';
import categories from '../../utils/categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const PostForm = ({ loading, submitPost, handleSubmit }) => {
  const onSubmit = post => {
    submitPost(post);
  };

  return (
    <Form loading={loading} onSubmit={handleSubmit(onSubmit)} wide>
      <Field
        name="category"
        label="category"
        type="select"
        component={renderField}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Field>
      <Field name="title" label="title" type="text" component={renderField} />
      <Field name="url" label="url" type="url" component={renderField} />
      <Field name="text" label="text" type="textarea" component={renderField} />
      <SubmitButton type="submit">create post</SubmitButton>
    </Form>
  );
};

export default PostForm;
