import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
        className="form-control"
          type={field.type}
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Title'
            name='title'
            type='text'
            component={this.renderField}
          />
          <Field
            label='Categories'
            name='categories'
            type='text'
            component={this.renderField}
          />
          <Field
            label='Content'
            name='content'
            type='text'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Please enter a title."
  }
  if (!values.content) {
    errors.content = "Please enter some content for your post."
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
