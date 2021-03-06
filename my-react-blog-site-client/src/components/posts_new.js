import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: {touched, error } } = field;
    const className =  `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className = {className}>
        <label>{field.label}</label>
        <input
          className = "form-control"
          type = {field.type}
          {...field.input}
        />
        <div className = 'text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit = { handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label = 'Title'
            name = 'title'
            type = 'text'
            component = { this.renderField }
          />
          <Field
            label = 'Categories'
            name = 'categories'
            type = 'text'
            component = { this.renderField }
          />
          <Field
            label = 'Content'
            name = 'content'
            type = 'text'
            component = { this.renderField }
          />
          <button type = 'submit' className = 'btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
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
})(
  connect(null, { createPost })(PostsNew)
);
