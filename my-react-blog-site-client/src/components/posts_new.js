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
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>New Post</h3>
        <form>
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
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
