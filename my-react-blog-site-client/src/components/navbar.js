import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          My React Blog Site
        </div>
        <div className="first-link">
          <Link className="btn btn-info" to='/'>
            Index
          </Link>
        </div>
        <div className="second-link">
          <Link className="btn btn-primary" to='/posts/new'>
            Add a Post
          </Link>
        </div>
      </nav>
    )
  }
}
